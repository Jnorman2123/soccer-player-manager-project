import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTeams } from '../../actions/teams/teamActions'
import { Link } from 'react-router-dom' 


class Teams extends Component {
    
    componentDidMount() {
        this.props.fetchTeams()
    }

    render() {
        return (
            <div>
                Teams
                {this.props.teams.teams.map((team, i) => {
                    return <Link to={`/teams/${team.id}`} key={i}>
                            <p>{team.name} </p>
                        </Link>
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