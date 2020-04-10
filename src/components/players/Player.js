import React, { Component }from 'react' 

class Player extends Component {
    constructor() {
        super() 
        this.state = {
            likes: 0
        }
    }

    handleClick = () => {
        this.setState({
            likes: this.state.likes + 1
        })
    }

    render () {
        return (
            <tr key={this.props.i}>
                <td>{this.props.player.name}</td>
                <td>Value: ${this.props.player.value}</td>
                <td><button onClick={this.handleClick}>Like</button></td>
                <td>Likes: {this.state.likes}</td>
            </tr>
    
        )
    }
}

export default Player