import React, { Component } from 'react' 

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


    render() {

        console.log(this.state)

        return (
            <div>
                <form>
                    <label>Name: </label>
                    <input type='text' value={this.state.name}></input>
                </form>
            </div>
        )
    }
}

export default EditTeamForm