import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPlayers } from '../actions/players/playerActions'
import Player from '../components/players/Player'
import Players from '../components/players/Players'

class PlayersContainer extends Component {

    componentDidMount() {
        this.props.fetchPlayers()
    }

    renderPlayers = (position) => {
        if (this.props.players.requesting === true) {
            return <h1>Loading...</h1>
        } else {
            return <div className='table' name={position}>
                <h2>{position}s</h2>
                <table className='w3-table-all w3-card-4'>
                    <tbody>{this.props.players.players.map((player, i) => {
                        if (player.position === position) {
                            return <Player key={i} player={player} i={i} />
                        } 
                    })}</tbody> 
                </table>
                
            </div>
        }  
    }

    render () {
        return (
            <div className='team'>
                <h1>Players</h1>
                <Players props={this.props} renderPlayers={this.renderPlayers} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        players: state.players,
        requesting: state.requesting
    }
}

export default connect(mapStateToProps, { fetchPlayers })(PlayersContainer) 