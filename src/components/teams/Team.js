import React, { Component } from 'react' 

class Team extends Component {
    

    componentDidMount() {
        this.props.fetchTeams()
    }

    render() {      
        return (
            <div>
                Team<br></br>
                {this.props.renderTeam()}
            </div>
        )
        
    }   
} 

export default Team
