import React, { Component } from 'react'
import NoMatch from './NoMatch'

class Errors extends Component {
   
    render () {
        if (this.props.location.response) {
            return (
                <div>
                    <ul>
                        {this.props.location.response.errors.map((error, i) => {
                            return <li key={i}>{error}</li>
                        })}
                    </ul>
                </div>
            ) 
        }   else {
            return (
                <div><NoMatch /></div>
            )
        } 
    } 
}

export default Errors