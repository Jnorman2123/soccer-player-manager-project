import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTeams } from '../actions/teams/teamActions'
import Teams from '../components/teams/Teams'

class TeamsContainer extends Component {

    render() {
        return (
            <div>
                Teams Container
                <Teams fetchTeams={this.props.fetchTeams} teams={this.props.teams}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {teams: state.teams}
}

export default connect(mapStateToProps, { fetchTeams })(TeamsContainer)