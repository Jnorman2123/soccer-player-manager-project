import React, { Component } from 'react' 
import { connect } from 'react-redux'
import { fetchTeams, deleteTeam } from '../../actions/teams/teamActions'

class Team extends Component {
    

    componentDidMount() {
        this.props.fetchTeams()
    }

    handleDelete = () => {
        const id = this.props.match.params.teamID
        this.props.deleteTeam(id)
        this.props.history.push('/teams')
    }

    handleEdit = () => {
        const teamId = parseInt(this.props.match.params.teamID)
        const theTeam = this.props.teams.teams.filter(team => team.id === teamId)[0]
        this.props.editTeam(theTeam)
    }

    renderTeam() {
        const teamId = parseInt(this.props.match.params.teamID)
        const theTeam = this.props.teams.teams.filter(team => team.id === teamId)[0]
        if (theTeam !== undefined) {
            return <div>
                <h3>{theTeam.name}</h3>
                <button onClick={this.handleEdit}>Edit {theTeam.name}</button>
                <button onClick={this.handleDelete}>Delete {theTeam.name}</button>
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

export default connect(mapStateToProps, { fetchTeams, deleteTeam })(Team)
