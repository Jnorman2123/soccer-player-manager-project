import React, { Component } from 'react'
import { connect } from 'react-redux'

class TeamContainer extends Component {
    render() {
        return (
            <div>
                Team Container
            </div>
        )
    }
}

export default connect()(TeamContainer)