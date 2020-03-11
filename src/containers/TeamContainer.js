import React, { Component } from 'react'
import Teams from '../components/teams/Teams'
import TeamForm from '../components/teams/TeamForm'


class TeamContainer extends Component {
    render() {
        return (
            <div>
                Teams Container
                <Teams />
                <TeamForm />
            </div>
        )
    }
}

export default TeamContainer