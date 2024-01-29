# Tauri Rito Launcher Clone
A clone of riot games launcher made with tauri rust :-D 

# Usage
- You will need rust and mongodb installed also either insomnia or postman to create a user because i was to lazy to let the user make one in the app.
- app will create a new db locally.
- cd into rito_backend and do command cargo run. then the server should start
- in another terminal cd into riot-launcher and npm install in that folder
- once the dependies are installed run npm run tauri dev.(make sure backend server is running still or you wont be able to log in)
- now the app is running but a user isnt made in the db. open insomnia/postman and make a post request to http://localhost:8080/users. Im unsure how postman is but in insomnia in the drop down make sure its in form url encoded. the first name is username, second is password. create whatever you want.
- log in and ignore the hover effects lol enjoy
  

# Issues
If you find any bugs or improvements please let me know in issues. :-D 
