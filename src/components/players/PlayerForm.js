import React, { Component } from 'react' 
import { connect } from 'react-redux'
import { addPlayer } from '../../actions/players/playerActions'

class PlayerForm extends Component {
    state = {
            name: '',
            position: '',
            value: ''
    }
    
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
s
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addPlayer(this.state)
        this.setState({
            name: '',
            position: '',
            value: ''
        })
        this.props.history.push('/players')
    }

    render() {
        return (
            <div>
                <h3>Create a New Player</h3>
                <form onSubmit={this.handleSubmit}> 
                    <label>Name: </label>
                    <input name='name' type='text' onChange={this.handleChange} value={this.state.name}></input><br></br>
                    <label>Position: </label>
                    <input name='position' type='text' onChange={this.handleChange} value={this.state.position}></input><br></br>
                    <label>Value: </label>
                    <input name='value' type='number' onChange={this.handleChange} value={this.state.value}></input><br></br>
                    <input type='submit' value='Create Player'></input>
                </form>
            </div>
        )
    }
}

export default connect(null, { addPlayer })(PlayerForm)