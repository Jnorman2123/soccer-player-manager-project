import React, { Component } from 'react'
// import { connect } from 'react-redux'
import Teams from '../components/teams/Teams'
import TeamForm from '../components/teams/TeamForm'

class TeamContainer extends Component {
    render() {
        return (
            <div>
                Team Container
                <Teams />
                <TeamForm />
            </div>
        )
    }
}

export default TeamContainer