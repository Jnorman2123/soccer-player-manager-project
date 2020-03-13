import React from 'react' 
import { connect } from 'react-redux'
import { fetchTeam } from '../../actions/teams/teamActions'

const Team = ({match, location}) => {
    const { params: { teamId} } = match

    this.props.fetchTeams(teamId)

    return (
        <div>
            Team
            {teams[teamId -1].name}
        </div>
    )
}

export default connect(null, { fetchTeam })(Team)
