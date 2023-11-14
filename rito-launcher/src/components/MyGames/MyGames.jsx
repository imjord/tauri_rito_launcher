import React from 'react'
import league from "../../assets/league.png";
import valorant from "../../assets/valorant.png";
import littleleague from "../../assets/league-little-gray.png";
import valorantlittle from "../../assets/valorant-little-gray.png";
import tacticlittle from "../../assets/tft-little-gray.png";

import teamfight from "../../assets/teamfight.png";
const MyGames = () => {
  return (
    <div className='mygames-container'>
    <div className='mygames-wrapper'>
    <div>
        <h2 className='mygames-title'>My Games</h2>
    </div>
    <div className='mygames'>
        <div>
            <img src={league} />
            <h2  className='wtf'><img className='little-img' src={littleleague}></img>League of legends</h2>
        </div>
        <div>
        <img src={valorant} />
        <h2 className='little' ><img className='little-img' src={valorantlittle}></img>Valorant</h2>

            </div>
            <div>
            <img src={teamfight} />
            
            <h2 className='little'><img className='little-img' src={tacticlittle}></img>Teamfight</h2>
            </div>
    </div>
    </div>
   
</div>
  )
}

export default MyGames