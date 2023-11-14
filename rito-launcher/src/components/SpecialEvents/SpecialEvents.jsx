import React from 'react'
import Special from "../../assets/special.png"
import "./SpecialEvents.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faApple, faGooglePlay} from "@fortawesome/free-brands-svg-icons";
const SpecialEvents = () => {
  return (
    <div className='special'>
        <div className='special-wrapper'>
            <div className='special-title'>
                <h2>Special Events</h2>
            </div>
            <div className='special-image'>
                <img src={Special} alt='special-events-image' />
            </div>
            <div className='special-content'>
             <div><h2>Download Rito Mobile Now</h2></div>
             <div>
                <div><p>riot mobile makes it easy to discover new content, stay informed accross all of our titles and events and connect to other players outside of the game</p></div>
                <div className='special-btns'>
                    <button><FontAwesomeIcon icon={faApple} /> iOS App Store</button>
                    <button><FontAwesomeIcon icon={faGooglePlay} /> Google Play</button>
                </div>
             </div>
            </div>
        </div>
    </div>
  )
}

export default SpecialEvents