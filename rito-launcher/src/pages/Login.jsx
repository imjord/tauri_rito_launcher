import React from 'react'
import "./Login.css"
import woah from "../assets/woah.jpg"
import {faArrowRight, faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faGoogle, faApple, faXbox} from "@fortawesome/free-brands-svg-icons"
const Login = () => {
  return (
    <div className='login-page'>
      <div className='settings'>
        <div>
          <FontAwesomeIcon className='setting-avatar' icon={faUser}/>
        </div>
      </div>
        <div className='login-left'>
          <div className='login-logo'>
            <h2>Rito Games</h2>
          </div>
          <div className='login-title'>
            <h3>Sign in</h3>
          </div>
          <div className='login-form'>
             <form>
              <input placeholder='USERNAME' type='text' />
              <input placeholder='PASSWORD' type='password' />
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
        <div className='login-sign-btn'>
          <div>
           <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
        <div className='login-footer'>
        <div><p>CANT SIGN IN?</p>
        <p>V75.0.9</p> </div>
        <div><p>THIS APP IS PROTECTED BY HCFAPTCH AND ITS PRIVACY POLICY AND TERMS OF SERVICE APPLY.</p></div>
        </div>

        </div>
        <div className='login-right'>
          <img src={woah} alt='rito' />
        </div>
    </div>
  )
}

export default Login