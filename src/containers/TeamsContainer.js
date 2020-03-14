import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTeams } from '../actions/teams/teamActions'
import { Link } from 'react-router-dom' 
import Teams from '../components/teams/Teams'

class TeamsContainer extends Component {

    componentDidMount() {
        this.props.fetchTeams()
    }

    renderTeams()  {
        return this.props.teams.teams.map((team, i) => {
        return <Link to={`/teams/${team.id}`} key={i}>
            <p>{team.name} </p>
        </Link>
        })
    }

    render() {
        return (
            <div>
                Teams Container
                <Teams renderTeams={this.renderTeams} props={this.props} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {teams: state.teams}
}

export default connect(mapStateToProps, { fetchTeams })(TeamsContainer)