import React from 'react' 

const Team = (props) => {
    return (
        <>
            {props.renderTeam()}
            {props.renderPlayers(props.props, 'Forward')} 
            {props.renderPlayers(props.props, 'Midfielder')}
            {props.renderPlayers(props.props, 'Defender')}
            {props.renderPlayers(props.props, 'Goalkeeper')}
            {props.renderNoPlayers()}
        </>
    )  
} 

export default Team
