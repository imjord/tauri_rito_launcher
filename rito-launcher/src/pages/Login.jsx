import React, { useState, useEffect } from 'react'
import "./Login.css"
import woah from "../assets/woah.jpg"
import {faArrowRight, faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faGoogle, faApple, faXbox} from "@fortawesome/free-brands-svg-icons"
import ritologo from "../assets/ritologo0.webp";
import ritologo0 from "../assets/rito2.png";
import spinner from "../assets/spinner.svg";
const Login = (props) => {
  const {user,username, password, setUser, setUsername, setPassword, color, setColor, login, loading, error, handleErrorInput} = props;


  const [errorMsg, setErrorMsg] = useState("");

 


  useEffect(() => {
    // Update the color based on the length of username and password
    setColor(username.length > 0 && password.length > 0);
  }, [username, password]);


  return (
    <div className='login-page'>  
    <div className='login-wrapper'>
      <div className='settings'>
        <div>
          <FontAwesomeIcon className='setting-avatar' icon={faUser}/>
        </div>
      </div>
      {loading ? <div className='login-left'>
        <img src={spinner} alt='spinner' className='spinner' />
        </div> :  <div className='login-left'>
          <div className='login-logo'>
            <img src={ritologo} alt='rito' />
          </div>
          <div className='login-title'>
            {error ? <div className='error-div'>
              <p>Sorry, we're having trouble signing you in right now. Please try again later.</p>
              </div> :     <h3>Sign in</h3>}
          </div>
          <div className='login-form'>
             <form id="loginForm">
              <input onClick={() => handleErrorInput()} className={error ? "error-input" : ""} placeholder='USERNAME' id='username' type='text' onChange={(e) => setUsername(e.target.value) } />
              <input  onClick={() => handleErrorInput()} className={error ? "error-input" :  ""}  placeholder='PASSWORD' id='password' type='password' onChange={(e) => setPassword(e.target.value) } />
             </form>
             <div className='login-brand-btns'>
              <div> <FontAwesomeIcon id='facebook-icon' className='login-btns' icon={faFacebook} /></div>
             <div><FontAwesomeIcon id='google-icon' className='login-btns' icon={faGoogle} /></div>


            <div><FontAwesomeIcon id='apple-icon' className='login-btns' icon={faApple} /></div>

<           div><FontAwesomeIcon id='xbox-icon' className='login-btns' icon={faXbox} /></div>
             </div>
          </div>
          <div className='login-stay-signed'>
          <input type="checkbox" id="staySignedIn" />
          <label for="staySignedIn">Stay Signed In</label>
        </div>
        <div className={error ? "login-sign-btn" : color ? "input-true" : 'login-sign-btn'}>
        <label htmlFor="loginForm">
          {color ? <div onClick={() => login()}>
            <FontAwesomeIcon   icon={faArrowRight} />

          </div> :  <div  >
           <FontAwesomeIcon   icon={faArrowRight} />
          </div>}
         
          </label>
        </div>
        <div className='login-footer'>
        <div><p>CANT SIGN IN?</p>
        <p>V75.0.9</p> </div>
        <div><p>THIS APP IS PROTECTED BY HCFAPTCH AND ITS PRIVACY POLICY AND TERMS OF SERVICE APPLY.</p></div>
        </div>

        </div>}

       
        <div className='login-right'>
          <img src={woah} alt='rito' />
        </div>
        </div>
    </div>
  )
}

export default Login