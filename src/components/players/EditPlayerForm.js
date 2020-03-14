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
        this.props.editPlayer(this.state, playerId)
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
                <form onSubmit={this.handleSubmit}> 
                    <label>Name: </label>
                    <input name='name' type='text' onChange={this.handleChange} value={this.state.name}></input><br></br>
                    <label>Position: </label>
                    <input name='position' type='text' onChange={this.handleChange} value={this.state.position}></input><br></br>
                    <label>Value: </label>
                    <input name='value' type='number' onChange={this.handleChange} value={this.state.value}></input><br></br>
                    <input type='submit' value='Edit Player'></input>
                </form>
            </div>
        )
    }
}

export default connect(null, { editPlayer })(EditPlayerForm)