import React, { Component } from 'react' 

class TeamForm extends Component {
    render() {
        return (
            <div>
                <h3>Create a New Team</h3>
                <form>
                    <label>Name: </label>
                    <input name='name' type='text'></input><br></br>
                    <label>Formation: </label>
                    <input name='formation' type='text'></input><br></br>
                    <label>Salary Cap: </label>
                    <input name='salary_cap' type='text'></input><br></br>
                    <input type='submit' value='Create Team'></input>
                </form>
            </div>
        )
    }
}

export default TeamForm