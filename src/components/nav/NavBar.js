import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
    render () {
        return (
           <div className='nav'>
               <div className='navBar'>
                    <Link to='/'>
                        <button className='button'>Home</button>
                    </Link>
                    <Link to='/teams'>
                        <button className='button'>Teams</button>
                    </Link>
                    <Link to='/players'>
                        <button className='button'>Players</button>
                    </Link>
                    <Link to='/teams/new'>
                        <button className='button'>Create a Team</button>
                    </Link>
                    <Link to='/players/new'>
                        <button className='button'>Create a Player</button>
                    </Link>
                </div>
           </div> 
        )
    }
}

export default NavBar