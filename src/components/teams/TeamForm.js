import React, { Component } from 'react' 
import { connect } from 'react-redux'
import { addTeam } from '../../actions/teams/teamActions'

class TeamForm extends Component {
    state = {
            name: '',
            formation: '',
            salary_cap: ''
    }
    
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
s
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTeam(this.state)
        this.setState({
            name: '',
            formation: '',
            salary_cap: ''
        })
        this.props.history.push('/teams')
    }

    render() {
        return (
            <div>
                <h1>Create a New Team</h1>
                <form class='form' onSubmit={this.handleSubmit}> 
                    <label for='name'>Name: </label>
                    <input id='name' name='name' type='text' onChange={this.handleChange} value={this.state.name}></input>
                    <label for='formation'>
                        Select Formation:
                        <select id ='formation' name='formation' value={this.state.formation} onChange={this.handleChange}>
                            <option value='DEFAULT' >Choose a Formation</option>
                            <option value='4-3-3'>4-3-3</option>
                            <option value='4-4-2'>4-4-2</option>
                            <option value='3-4-3'>3-4-3</option>
                            <option value='3-5-2'>3-5-2</option>
                        </select> 
                    </label>
                    <label for='salary_cap'>Salary Cap: </label>
                    <input id='salary_cap' name='salary_cap' type='number' onChange={this.handleChange} value={this.state.salary_cap}></input>
                    <input type='submit' value='Create Team'></input>
                </form>
            </div>
        )
    }
}

export default connect(null, { addTeam })(TeamForm)