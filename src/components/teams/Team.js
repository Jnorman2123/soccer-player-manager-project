import React from 'react' 

const Team = (props) => {
    return (
        <>{props.renderTeam(props.props)} {props.renderPlayers(props.props)} </>
    )  
} 

export default Team
