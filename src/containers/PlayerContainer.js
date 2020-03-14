import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPlayers, deletePlayer } from '../actions/players/playerActions'
import { Link } from 'react-router-dom'
import Player from '../components/players/Player'

class PlayerContainer extends Component {

    componentDidMount() {
        this.props.fetchPlayers()
    }

    renderPlayer() {
        const playerId = this.props.match.params.playerID
        const thePlayer = this.props.players.players.filter(player => player.id === parseInt(playerId))[0]
        if (thePlayer !== undefined) {
            return <div>
                <h2>{thePlayer.name}</h2>
                <h3>{thePlayer.position}</h3>
                <h4>{thePlayer.name} has a value of  ${thePlayer.value.toString()}.</h4>
                <button onClick={() => {this.props.deletePlayer(playerId); this.props.history.push('/players')} }>Delete {thePlayer.name}</button>
                <Link to={{pathname: `/players/${playerId.toString()}/edit`, player: thePlayer }  }>
                        <button>Edit {thePlayer.name}</button>
                </Link>
            </div>
        }
    }

    render() {
        return (
            <div>
                <Player props={this.props} renderPlayer={this.renderPlayer} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {players: state.players}
}

export default connect(mapStateToProps, { fetchPlayers, deletePlayer })(PlayerContainer)