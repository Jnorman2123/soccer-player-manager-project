import React, { Component } from 'react'
import { connect } from 'react-redux'
import Teams from '../components/teams/Teams'
import TeamForm from '../components/teams/TeamForm'
import { fetchTeams } from '../actions/teamActions'

class TeamContainer extends Component {

    render() {
        return (
            <div>
                Teams Container
                <Teams fetchTeams={this.props.fetchTeams} />
                <TeamForm />
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return { fetchTeams: () => dispatch(fetchTeams)}
}

export default connect(null, mapDispatchToProps)(TeamContainer)