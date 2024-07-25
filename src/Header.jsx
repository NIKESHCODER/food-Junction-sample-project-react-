import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
  let[menuStatus, setmenuStatus]=useState(false)
  return (
    <div>
      <button className='micon' onClick={()=>setmenuStatus(!menuStatus)}>&#9776;</button>
        <div className={`menu ${menuStatus ? 'activeMenu' : ''}`}>
            <ul>
                <li><Link to="/"><button>Home</button></Link></li>
                <li><Link to="about"><button>About</button></Link></li>
                <li><Link to="contact"><button>Contact</button></Link></li>
            </ul>
        </div>
    </div>
  )
}
