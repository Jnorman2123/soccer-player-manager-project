import React, { Component } from 'react' 

class TeamForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <label>Team Form</label>
                    <input type='text'></input>
                    <input type='submit' value='Create Team'></input>
                </form>
            </div>
        )
    }
}

export default TeamForm