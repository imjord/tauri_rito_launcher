mod user;

use actix_web::{get, post, http, web, App, HttpResponse, HttpServer};
use actix_cors::Cors;
use actix_web::http::header;

use mongodb::{bson::doc, options::IndexOptions, Client, Collection, IndexModel};
use user::User;
use futures_util::stream::StreamExt;
use bcrypt::{DEFAULT_COST, hash, verify};


const COLL_NAME: &str = "users";
const DB_NAME: &str = "rito_rust";



// create a new user and insert into the db
#[post("/users")]
async fn create_user(client: web::Data<Client>, form: web::Form<User>) -> HttpResponse {
    let collection: Collection<User> = client.database(DB_NAME).collection(COLL_NAME);

    let new_user = User {
        username: form.username.clone(),
        password: form.password.clone()
    };

    
    

    match collection.insert_one(new_user.clone(), None).await {
        Ok(user) => {
            HttpResponse::Ok().json(user)
        }   
        Err(err) => {
            HttpResponse::InternalServerError().body(err.to_string())
        }
    }
}


// get users inlucding plain password cuz arnt hashed cause idk how sorry this is a personal project anyways with a local db (pls dont hack mew)
#[get("/users")]
async fn get_users(client: web::Data<Client>) -> HttpResponse {
     // get the collection
     let collection: Collection<User> = client.database(DB_NAME).collection(COLL_NAME);
     // find() on the collection with no filters or options. this will return a cursor
     let mut cursor = collection.find(None, None).await.expect("cant fetch notes");
     // empty vec of user type
     let mut users: Vec<User> = Vec::new();
 
     // loop over the cursor 
     while let Some(doc) = cursor.next().await {
        
         match doc {
             Ok(user) => {
                 users.push(user);
             }
             Err(_err) => {
                 return HttpResponse::InternalServerError().body(_err.to_string());
             }
         }
     }
     // if nothing pushed into users then no users found
     if !users.is_empty() {
         println!("{:?}", users);
         HttpResponse::Ok().json(users)
     } else {
         HttpResponse::NotFound().body("no users found")
     }
}



// login a user
#[post("/users/login")]
async fn login(client: web::Data<Client>, form: web::Form<User>) -> HttpResponse {
    let client: Collection<User> = client.database(DB_NAME).collection(COLL_NAME);

    let mut errors: Vec<&str> = Vec::new();
    let mut success: Vec<&str> = Vec::new();


    let user = User {
        username: form.username.clone(),
        password: form.password.clone(),
   
    };

    


    let find_user: Result<Option<User>, mongodb::error::Error> = client.find_one(doc!{"username": &user.username}, None).await;

   match find_user {
        Ok(Some(_user)) => {
            success.push("correct username")
        },
        Ok(None) => {
            errors.push("invalid username!")        },
        Err(err) => {
            HttpResponse::InternalServerError().body(err.to_string());
        }
    }

    let find_password = client.find_one(doc! {"password": &user.password}, None).await;

    match find_password {
        Ok(Some(_user)) => {
            success.push("correct password")
        },
        Ok(None) => {
            errors.push("invalid password!")
        },
        Err(err) => {
            HttpResponse::InternalServerError().body(err.to_string());
        }
    }

    if success.len() == 2 {
        HttpResponse::Ok().body("Correct credentials!")
    } else {
        HttpResponse::NotFound().json(errors)
    }
}


#[actix_web::main]
async fn main() -> std::io::Result<()>{
    let client = Client::with_uri_str("mongodb://127.0.0.1:27017/rito_rust").await.expect("failed to connect to db");

    HttpServer::new(move || {
        let cors = Cors::default()
        .allowed_origin("http://localhost:1420")
        .allowed_methods(vec!["GET", "POST"])
        .allowed_headers(vec![http::header::AUTHORIZATION, http::header::ACCEPT])
        .allowed_header(http::header::CONTENT_TYPE)
        .max_age(3600);
        App::new().wrap(cors).app_data(web::Data::new(client.clone())).service(get_users).service(create_user).service(login)
   
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}
