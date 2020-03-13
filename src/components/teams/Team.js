import React, { Component } from 'react' 
import { connect } from 'react-redux'
import { fetchTeams } from '../../actions/teams/teamActions'

class Team extends Component {

    componentDidMount() {
        this.props.fetchTeams()
    }

    renderTeam() {
        const teamId = parseInt(this.props.match.params.teamID)
        const theTeam = this.props.teams.teams.filter(team => team.id === teamId)[0]
        if (theTeam !== undefined) {
            return <div>
                <h3>{theTeam.name}</h3>
                <button>Delete {theTeam.name}</button>
            </div>
        }
    }

    render() {
        
        
        return (
            <div>
                Team<br></br>
                {this.renderTeam()}
            </div>
        )
        
    }   
} 

const mapStateToProps = (state) => {
    return {teams: state.teams}
}

export default connect(mapStateToProps, { fetchTeams })(Team)
