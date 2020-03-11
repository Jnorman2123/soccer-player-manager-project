import React, { Component } from 'react'
import Players from '../components/players/Players'
import PlayerForm from '../components/players/PlayerForm' 

class PlayerContainer extends Component {
    render () {
        return (
            <div>
                Player Container
                <Players />
                <PlayerForm />
            </div>
        )
    }
}

export default PlayerContainer 