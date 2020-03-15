import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTransfer } from '../../actions/transfers/transferActions'

class Transfer extends Component {
    render() {
        console.log(this.props.teamId)
        return (
            <div>Transfer</div>
        )
    }
}

export default connect(null, { addTransfer })(Transfer)