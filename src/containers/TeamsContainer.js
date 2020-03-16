import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTeams } from '../actions/teams/teamActions'
import { Link } from 'react-router-dom' 
import Teams from '../components/teams/Teams'

class TeamsContainer extends Component {

    componentDidMount() {
        this.props.teams.teams = []
        this.props.fetchTeams()
    }

    renderTeams()  {
        if (this.props.teams.teams.length !== undefined) {
            return <ul class='w3-ul w3-hoverable'>
                {this.props.teams.teams.map((team, i) => {
                return <Link to={`/teams/${team.id}`} key={i}>
                    <li><h3>{team.name}</h3></li>
                </Link>
            })}
            </ul>
        }
    }

    render() {
        return (
            <div class='team'>
                <h1>Teams</h1>
                <Teams renderTeams={this.renderTeams} props={this.props} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {teams: state.teams}
}

export default connect(mapStateToProps, { fetchTeams })(TeamsContainer)