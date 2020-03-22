import React, { Component } from 'react' 
import { connect } from 'react-redux'
import { editTeam } from '../../actions/teams/teamActions'

class EditTeamForm extends Component {
    state = {
        name: '',
        formation: '',
        salary_cap: ''
    }

    componentDidMount() {
        if (this.props.location.team) {
            this.setState({
                name: this.props.location.team.name,
                formation: this.props.location.team.formation,
                salary_cap: this.props.location.team.salary_cap 
            })
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })  
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const teamId = this.props.match.params.teamID
        this.props.editTeam(this.state, teamId, this.props)
        this.setState({
            name: '',
            formation: '',
            salary_cap: ''
        })
    }


    render() {
        return (
            <div>
                <h1>Edit Team Form</h1>
                <form className='form' onSubmit={this.handleSubmit}>
                    <label>Name: </label>
                    <input type='text' name='name' onChange={this.handleChange} value={this.state.name}></input><br></br>
                    <label>
                        Select Formation:
                        <select name='formation' value={this.state.formation} onChange={this.handleChange}>
                            <option value='DEFAULT' >Choose a Formation</option>
                            <option value='4-3-3'>4-3-3</option>
                            <option value='4-4-2'>4-4-2</option>
                            <option value='3-4-3'>3-4-3</option>
                            <option value='3-5-2'>3-5-2</option>
                        </select> 
                    </label><br></br>
                    <label>Salary Cap: </label>
                    <input type='number' name='salary_cap' onChange={this.handleChange} value={this.state.salary_cap}></input><br></br>
                    <input type='submit' value='Edit Team'></input>
                </form>
            </div>
        )
    }
}

export default connect(null, { editTeam })(EditTeamForm)