import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTeams } from '../../actions/teams/teamActions' 
// import Team from './Team'

class Teams extends Component {
    
    componentDidMount() {
        this.props.fetchTeams()
    }

    render() {
        return (
            <div>
                Teams
                {this.props.teams.teams.map((team, i) => {
                    return <p key={i} >{team.name}</p>
                })} 
                {/* <Team /> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Teams)