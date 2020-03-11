import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPlayers } from '../../actions/players/playerActions' 
// import Player from './Player'

class Players extends Component {

    componentDidMount() {
        this.props.fetchPlayers()
    }

    render() {
        return (
            <div>
                Players
                {this.props.players.players.map((player, i) => {
                    return <p key={i} >{player.name}</p>
                })}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return { fetchPlayers: () => dispatch(fetchPlayers())}
}

function mapStateToProps(state) {
    return { players: state.players}
}

export default connect(mapStateToProps, mapDispatchToProps)(Players) 