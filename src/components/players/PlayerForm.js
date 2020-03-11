import React, { Component } from 'react' 

class PlayerForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <label>Player Form</label>
                    <input type='text'></input>
                    <input type='submit' value='Create Player'></input>
                </form>
            </div>
        )
    }
}

export default PlayerForm