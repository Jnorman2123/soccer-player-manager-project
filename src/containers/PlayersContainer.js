import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPlayers } from '../actions/players/playerActions'
import { Link } from 'react-router-dom' 
import Players from '../components/players/Players'

class PlayersContainer extends Component {

    componentDidMount() {
        this.props.fetchPlayers()
    }

    renderPlayers(position) {
        return <div class='table' name={position}>
            <h2>{position}s</h2>
            <table class='w3-table-all w3-card-4'>
                {this.props.players.players.map((player, i) => {
                    if (player.position === position) {
                        return <tr key={i}>
                            <Link to={`/players/${player.id}`}>
                                <td>{player.name}</td>
                            </Link>
                            <td>Value: ${player.value}</td>
                        </tr>
                    } 
                })}
            </table>
        </div>
    }

    render () {
        return (
            <div class='team'>
                <h1>Players</h1>
                <Players props={this.props} renderPlayers={this.renderPlayers} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { players: state.players}
}

export default connect(mapStateToProps, { fetchPlayers })(PlayersContainer) 