import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTeams, deleteTeam } from '../actions/teams/teamActions'
import { Link } from 'react-router-dom'
import Team from '../components/teams/Team'

class TeamContainer extends Component {

    componentDidMount() {
        this.props.fetchTeams()
    }

    renderTeam() {
        const teamId = this.props.match.params.teamID
        const theTeam = this.props.teams.teams.filter(team => team.id === parseInt(teamId))[0]
        if (theTeam !== undefined) {
            return <div>
                <h2>{theTeam.name}</h2>
                <h3>{theTeam.formation}</h3>
                <h3>Players</h3>
                {theTeam.players.map((player, i) => {
                    return <div key={i}>
                        <p>{player.position}</p>
                        <p>{player.name}</p>
                    </div>
                })}
                <button>Add Player</button>
                <h4>{theTeam.name} has ${theTeam.salary_cap.toString()} remaining salary cap balance.</h4>
                <button onClick={() => {this.props.deleteTeam(teamId); this.props.history.push('/teams')} }>Delete {theTeam.name}</button>
                <Link to={{pathname: `/teams/${teamId.toString()}/edit`, team: theTeam }  }>
                        <button>Edit {theTeam.name}</button>
                </Link>
            </div>
        }
    }

    render() {
        return (
            <div>
                <Team props={this.props} renderTeam={this.renderTeam} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {teams: state.teams}
}

export default connect(mapStateToProps, { fetchTeams, deleteTeam })(TeamContainer)