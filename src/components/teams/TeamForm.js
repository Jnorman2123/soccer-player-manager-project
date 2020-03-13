import React, { Component } from 'react' 

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

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
        this.setState({
            name: '',
            formation: '',
            salary_cap: ''
        })
    }

    render() {
        return (
            <div>
                <h3>Create a New Team</h3>
                <form onSubmit={this.handleSubmit}> 
                    <label>Name: </label>
                    <input name='name' type='text' onChange={this.handleChange} value={this.state.name}></input><br></br>
                    <label>Formation: </label>
                    <input name='formation' type='text' onChange={this.handleChange} value={this.state.formation}></input><br></br>
                    <label>Salary Cap: </label>
                    <input name='salary_cap' type='number' onChange={this.handleChange} value={this.state.salary_cap}></input><br></br>
                    <input type='submit' value='Create Team'></input>
                </form>
            </div>
        )
    }
}

export default TeamForm