import React from 'react'
import "./Home.css"; 
import MyGames from '../components/MyGames/MyGames';
import AllGames from '../components/AllGames/AllGames';
import SpecialEvents from '../components/SpecialEvents/SpecialEvents';
import {faArrowRight, faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <div className='home'>
      
        <div className='home-wrapper'>
        <div className='settings-home'>
        <div>
          <FontAwesomeIcon className='setting-avatar-home' icon={faUser}/>
        </div>
      </div>
        <nav className='nav'>
            <h2>Riot Games</h2>
        </nav>
        <MyGames />
        <AllGames />
        <SpecialEvents />
        </div>
      
    </div>
  )
}

export default Home