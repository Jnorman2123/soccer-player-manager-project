import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTransfer } from '../../actions/transfers/transferActions'
import { fetchTeam } from '../../actions/teams/teamActions'
import { fetchPlayers } from '../../actions/players/playerActions'

class Transfer extends Component {
    state = {
        team_id: this.props.teamId,
        player_id: ''
    }

    componentDidMount() {
        this.props.teams.teams = []
        this.props.fetchPlayers() 
        this.props.fetchTeam(this.props.teamId)
    }

    createPlayers() {
        if (this.props.players.players.length > 0) {
            return this.props.players.players.map((player, i) => {
                return <option key={i} value={player.id}>{player.name}</option>
            })
        }
    }

    handleChange = (event) => {
        this.setState({
            player_id: event.target.value
        })
    }
s
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTransfer(this.state)
    }

    render() {
        return (
            <div>
                Transfer
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Choose Player to Add:
                        <select name='player_id' value={this.state.player_id} onChange={this.handleChange}>
                            {this.createPlayers()}
                        </select><br></br>
                    </label>
                    <input type='submit' value="Add Player to"></input>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        teams: state.teams,
        players: state.players
    }
}

export default connect(mapStateToProps, { addTransfer, fetchTeam, fetchPlayers })(Transfer)
