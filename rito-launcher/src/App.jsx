import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import axios from "axios"
import qs from 'qs';

function App() {
  const [user,setUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [color, setColor] = useState(false);
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");



  
  const handleErrorInput = () => {
    setError(false);
    setColor(false);
  }

  const login = async () => {

    try {
      setLoading(true);
      const data = qs.stringify({
        username: username,
        password: password,
      });
      const response = await axios.post("http://localhost:8080/users/login", data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      setLoading(false);
      console.log(response);
      setUser(true);

    } catch (err) {

      console.log(err)
      setLoading(false)
      setError(true)
    }

  }





  return (
    <div className="container">
      {user ? <Home /> :       <Login username={username} password={password} setUsername={setUsername} setPassword={setPassword} color={color} setColor={setColor} handleErrorInput={handleErrorInput}  error={error} loading={loading} setUser={setUser} user={user} login={login} />
}
    </div>
  );
}

export default App;
