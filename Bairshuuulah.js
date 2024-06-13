import React, { useState } from 'react'
import './Bairshuulah.css'
import '../lesson 33/Sneaker'
import '../lesson 31/Movies'
import '../togloom/SpeedClick'
import '../XO/Tictac'
import SpeedClick from '../togloom/SpeedClick'
import Movies from '../lesson 31/Movies'
import Tictac from '../XO/Tictac'
import Tootaah from '../too taah togloom/Tootaah'
const Bairshuuulah = () => {
  const [bairshuulah, setBairshuulah] =  useState(0)
const showSneakr = () =>{
setBairshuulah (1)
}
const showMovie = () => {
  setBairshuulah (2)
}


const showFast = () => {
  setBairshuulah (3)
}
const showTictac = () => {
  setBairshuulah (4)
}

return (
    <div className='h1'>
       <h1>Minii hiisen zuiltei taniltsaarai 🔥</h1> 
       <div className='onlin' >
<button onClick={showSneakr}>Too taaah</button>
<button onClick={showMovie} >Movie 🌟unelgee </button>
<button onClick={showFast} >Fast click togloom</button>
<button onClick={showTictac} >Tictak buyu X,O togloom</button>

        </div>
        <div>
          {bairshuulah ===1 && <Tootaah/> }
{bairshuulah === 2 && <Movies/> }
{bairshuulah ===3 && <SpeedClick/> }
{bairshuulah === 4 && <Tictac/>}
        </div>
        {/* <h4>© hiisen setgeshgui</h4> */}
       </div>
       
  )
}

export default Bairshuuulah