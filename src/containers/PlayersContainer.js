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
        return <div name={position}>
            <h1>{position}s</h1>
            {this.props.players.players.map((player, i) => {
                if (player.position === position) {
                    return <Link to={`/players/${player.id}`} key={i}>
                        <p>{player.name} - Value: ${player.value}</p>
                    </Link>
                } 
            })}
        </div>
    }

    render () {
        return (
            <div>
                <Players props={this.props} renderPlayers={this.renderPlayers} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { players: state.players}
}

export default connect(mapStateToProps, { fetchPlayers })(PlayersContainer) 