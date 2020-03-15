import React, { Component } from 'react' 

class TransferContainer extends Component {
    
    render() {
        console.log(this.props.location.team.name)
        // const team = this.props.location.team
        return (
            <div>
                TransferContainer
            </div>
        )
    }
}

export default TransferContainer