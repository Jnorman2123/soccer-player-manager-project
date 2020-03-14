import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPlayers } from '../actions/players/playerActions'
import { Link } from 'react-router-dom' 
import Players from '../components/players/Players'

class PlayersContainer extends Component {

    componentDidMount() {
        this.props.fetchPlayers()
    }

    renderPlayers() {
        return this.props.players.players.map((player, i) => {
            return <Link to={`/players/${player.id}`} key={i}>
            <p>{player.name} </p>
        </Link>
        })
    }

    render () {
        return (
            <div>
                Players Container
                <Players props={this.props} renderPlayers={this.renderPlayers} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { players: state.players}
}

export default connect(mapStateToProps, { fetchPlayers })(PlayersContainer) 