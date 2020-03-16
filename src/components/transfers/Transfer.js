import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTransfer } from '../../actions/transfers/transferActions'
import { fetchTeam, editTeam } from '../../actions/teams/teamActions'
import { fetchPlayers } from '../../actions/players/playerActions'


class Transfer extends Component {
    state = {
        team: {
            name: '',
            formation: '',
            salary_cap: ''
        },
        transfer: {
            team_id: this.props.teamId,
            player_id: ''
        },
        player_value: ''
    }

    componentDidMount() {
        this.props.teams.teams = []
        this.props.fetchPlayers() 
        this.props.fetchTeam(this.props.teamId)
    }

    createPlayers() {
        if (this.props.players.players.length > 0) {
            return this.props.players.players.map((player, i) => {
                return <option key={i} value={player.id}>{player.name} Price: ${player.value} {player.position}</option>
            })
        }
    }

    handleChange = (event) => {
        this.setState({
            transfer: {
                ...this.state.transfer, 
                player_id: event.target.value
            },
            player_value: event.target.player_price
        })
    }
s
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTransfer(this.state.transfer)
        this.props.teams.teams = []
        this.props.props.history.push(`/teams/${this.props.teamId}`)
    }

    render() {
        return (
            <div>
                Remaining Salary Cap ${this.props.teams.teams.salary_cap}
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Choose Player to Add:
                        <select name='player_id' value={this.state.transfer.player_id} onChange={this.handleChange}>
                            {this.createPlayers()}
                        </select><br></br>
                    </label>
                    <input type='submit'value="Add Player"></input>
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

export default connect(mapStateToProps, { addTransfer, fetchTeam, fetchPlayers, editTeam })(Transfer)
