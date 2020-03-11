import React, { Component } from 'react'
import { connect } from 'react-redux'
import Teams from '../components/teams/Teams'
import TeamForm from '../components/teams/TeamForm'
import { fetchTeams } from '../actions/teams/teamActions'

class TeamContainer extends Component {
    componentDidMount() {
        console.log(this.props)
        this.props.fetchTeams()
    }

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
function mapStateToProps(state) {
    return {teams: state.teams}
}

function mapDispatchToProps(dispatch) {
    return { fetchTeams: () => dispatch(fetchTeams())}
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamContainer)