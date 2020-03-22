import React, { Component } from 'react' 
import { connect } from 'react-redux'
import { editPlayer } from '../../actions/players/playerActions'

class EditPlayerForm extends Component {
    state = {
            name: '',
            position: '',
            value: ''
    }

    componentDidMount() {
        if (this.props.location.player) {
            this.setState({
                name: this.props.location.player.name,
                position: this.props.location.player.position,
                value: this.props.location.player.value 
            })
        }
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
s
    handleSubmit = (event) => {
        event.preventDefault()
        const playerId = this.props.match.params.playerID
        this.props.editPlayer(this.state, playerId, this.props)
        this.setState({
            name: '',
            position: '',
            value: ''
        })
    }

    render() {
        return (
            <div>
                <h1>Edit Player Form</h1>
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
                    <input type='submit' value='Edit Player'></input>
                </form>
            </div>
        )
    }
}

export default connect(null, { editPlayer })(EditPlayerForm)