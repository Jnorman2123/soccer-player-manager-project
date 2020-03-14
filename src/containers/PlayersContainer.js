import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPlayers } from '../actions/players/playerActions' 
import Players from '../components/players/Players'

class PlayersContainer extends Component {

    componentDidMount() {
        this.props.fetchPlayers()
    }

    renderPlayers() {
        return this.props.players.players.map((player, i) => {
            return <p key={i} >{player.name}</p>
        })
    }

    render () {
        return (
            <div>
                Player Container
                <Players props={this.props} renderPlayers={this.renderPlayers} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { players: state.players}
}

export default connect(mapStateToProps, { fetchPlayers })(PlayersContainer) 