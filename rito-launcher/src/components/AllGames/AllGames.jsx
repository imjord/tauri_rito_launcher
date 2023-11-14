import React from 'react'
import "./AllGames.css"
import leaguebig from "../../assets/leaguebig.png";
import legends from "../../assets/legends.png";
import rift from "../../assets/rift.png";
import tactics from "../../assets/tactics.png";
import valo from "../../assets/valo.png";
import littleleague from "../../assets/league-little-gray.png";
import valorantlittle from "../../assets/valorant-little-gray.png";
import tacticlittle from "../../assets/tft-little-gray.png";
import runterralittle from "../../assets/runterra-little.png"
import riftlittle from "../../assets/rift-little.png"
const AllGames = () => {
  return (
    <div className='allgames'>
        <div className='allgames-wrapper'>
        <div className='allgames-title'>
        <h2>All Games</h2>
        </div>
        <div className='allgames-list'>
        <div>
            <img src={leaguebig} />
            <h2><img className='little-img' src={littleleague} /> League of legends</h2>
        </div>
        <div>
          <img src={legends} />
            <h2><img className='little-img' src={runterralittle} />Legends of runeterra</h2>
            </div>
            <div>
            <img src={rift} />
            <h2><img className='little-img' src={riftlittle} />Wild Rift</h2>
            </div>
            <div>
            <img src={tactics} />
            <h2><img className='little-img' src={tacticlittle} />Teamfight tactics</h2>
            </div>
            <div>
            <img src={valo} />
            <h2><img className='little-img' src={valorantlittle} />Valorant</h2>
            </div>
        </div>
        </div>
       
    </div>
  )
}

export default AllGames