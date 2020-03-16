import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
    render () {
        return (
           <div class='nav'>
               <div class='navBar'>
                    <Link to='/'>
                        <button class='button'>Home</button>
                    </Link>
                    <Link to='/teams'>
                        <button class='button'>Teams</button>
                    </Link>
                    <Link to='/players'>
                        <button class='button'>Players</button>
                    </Link>
                    <Link to='/teams/new'>
                        <button class='button'>Create a Team</button>
                    </Link>
                    <Link to='/players/new'>
                        <button class='button'>Create a Player</button>
                    </Link>
                </div>
           </div> 
        )
    }
}

export default NavBar