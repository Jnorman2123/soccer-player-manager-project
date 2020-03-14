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

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })  
    }


    render() {

        console.log(this.state)

        return (
            <div>
                <form>
                    <label>Name: </label>
                    <input type='text' name='name' onChange={this.handleChange} value={this.state.name}></input><br></br>
                    <label>Formation: </label>
                    <input type='text' name='formation' onChange={this.handleChange} value={this.state.formation}></input><br></br>
                    <label>Salary Cap: </label>
                    <input type='number' name='salary_cap' onChange={this.handleChange} value={this.state.salary_cap}></input><br></br>
                    <input type='submit' value='Edit Team'></input>
                </form>
            </div>
        )
    }
}

export default EditTeamForm