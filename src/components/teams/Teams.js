import React, { Component } from 'react'
import { Link } from 'react-router-dom' 


class Teams extends Component {
    
    componentDidMount() {
        this.props.fetchTeams()
    }

    render() {
        const renderTeams = this.props.teams.teams.map((team, i) => {
            return <Link to={`/teams/${team.id}`} key={i}>
                <p>{team.name} </p>
            </Link>
        })
        return (
            <div>
                Teams
                {renderTeams}
            </div>
        )
    }
}

export default Teams