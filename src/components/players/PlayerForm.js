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
        this.props.addPlayer(this.state, this.props)
        this.setState({
            name: '',
            position: '',
            value: ''
        })
    }

    render() {
        return (
            <div>
                <h1>Create a New Player</h1>
                <form className='form' onSubmit={this.handleSubmit}> 
                    <label>Name: </label>
                    <input name='name' type='text' onChange={this.handleChange} value={this.state.name}></input><br></br>
                    <label>
                        Select Position:
                        <select name='position' value={this.state.position} onChange={this.handleChange}>
                        <option value='DEFAULT' >Choose a Position</option>
                            <option value='Forward'>Forward</option>
                            <option value='Midfielder'>Midfielder</option>
                            <option value='Defender'>Defender</option>
                            <option value='Goalkeeper'>Goalkeeper</option>
                        </select> 
                    </label><br></br>
                    <label>Value: </label>
                    <input name='value' type='number' onChange={this.handleChange} value={this.state.value}></input><br></br>
                    <input type='submit' value='Create Player'></input>
                </form>
            </div>
        )
    }
}

export default connect(null, { addPlayer })(PlayerForm)