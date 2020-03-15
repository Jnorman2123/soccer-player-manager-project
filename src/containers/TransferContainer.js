import React, { Component } from 'react'
import Transfer from '../components/transfers/Transfer'

class TransferContainer extends Component {
    
    render() {
        const teamId = this.props.match.params.teamID
        return (
            <div>
                TransferContainer
                <Transfer teamId={teamId} props={this.props} />
            </div>
        )
    }
}

export default TransferContainer