import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");
  const [user,setUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [color, setColor] = useState(false);

  const handleErrorInput = () => {
    setError(false);
    setColor(false);
  }

  const login =  () => {

    setLoading(true);
    console.log("timed");
  
    setTimeout(() => {
      setUser(true);
      setLoading(false);
      console.log("working");
    }, 1500);
  }

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }



  return (
    <div className="container">
      {user ? <Home /> :       <Login color={color} setColor={setColor} handleErrorInput={handleErrorInput}  error={error} loading={loading} setUser={setUser} user={user} login={login} />
}
    </div>
  );
}

export default App;
