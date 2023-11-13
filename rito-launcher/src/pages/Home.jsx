import React from 'react'
import "./Home.css"; 
import league from "../assets/league.png";
import valorant from "../assets/valorant.png";
import teamfight from "../assets/teamfight.png";

const Home = () => {
  return (
    <div className='home'>
        <div className='home-wrapper'>
        <nav className='nav'>
            <h2>Riot GAmes</h2>
        </nav>
        <div className='mygames-container'>
            <div className='mygames-wrapper'>
            <div>
                <h2 className='mygames-title'>My Games</h2>
            </div>
            <div className='mygames'>
                <div>
                    <img src={league} />
                    <h2 className='wtf'>League of legends</h2>
                </div>
                <div>
                <img src={valorant} />
                <h2>Valorant</h2>

                    </div>
                    <div>
                    <img src={teamfight} />
                    <h2>Teamfight</h2>
                    </div>
            </div>
            </div>
           
        </div>
        <div className='all-games'>

        </div>
        </div>
      
    </div>
  )
}

export default Home