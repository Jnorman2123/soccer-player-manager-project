import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTeam, deleteTeam } from '../actions/teams/teamActions'
import { addTransfer } from '../actions/transfers/transferActions'
import { Link } from 'react-router-dom'
import Team from '../components/teams/Team'

class TeamContainer extends Component {

    componentDidMount() {
        const teamId = this.props.match.params.teamID
        this.props.fetchTeam(teamId)
    }

    renderPlayers() {
        const theTeam = this.props.teams.teams
        if (theTeam.players !== undefined && theTeam.players.length === 0) {
            return <h4>This Team Currently Has No Players</h4>
        } else if (theTeam.players !== undefined && theTeam.players.length > 0) {
            return <div>
                <h3>Players</h3>
                {theTeam.players.map((player, i) => {
                return <div key={i}>
                    <h3>{player.name}</h3>
                    <h4>{player.position}</h4>
                </div>
            })}
            </div>
        }
    }

    renderTeam() {
        const theTeam = this.props.teams.teams
            return <div>
                <h2>{theTeam.name}</h2>
                <h3>{theTeam.formation}</h3>
                
                
                <Link to={{pathname: `/teams/${theTeam.id}/transfer`, team: theTeam }  }>
                        <button>Add Player to {theTeam.name}</button>
                </Link>
                <h4>{theTeam.name} has ${theTeam.salary_cap} remaining salary cap balance.</h4>
                <button onClick={() => {this.props.deleteTeam(theTeam.id); this.props.history.push('/teams')} }>Delete {theTeam.name}</button>
                <Link to={{pathname: `/teams/${theTeam.id}/edit`, team: theTeam }  }>
                        <button>Edit {theTeam.name}</button>
                </Link>
            </div>
    }

    render() {
        return (
            <div>Hi
                <Team props={this.props} renderTeam={this.renderTeam} renderPlayers={this.renderPlayers} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {teams: state.teams}
}

export default connect(mapStateToProps, { fetchTeam, deleteTeam, addTransfer })(TeamContainer)