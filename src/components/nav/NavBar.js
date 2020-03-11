import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
    render () {
        return (
           <div>
               <div>
                    <Link to='/'>
                        <button>Home</button>
                    </Link>
                    <Link to='/teams'>
                        <button>Teams</button>
                    </Link>
                    <Link to='/players'>
                        <button>Players</button>
                    </Link>
                </div>
                   <br></br>
           </div> 
        )
    }
}

export default NavBar