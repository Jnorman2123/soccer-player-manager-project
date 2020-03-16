import React from 'react' 

const Team = (props) => {
    return (
        <>
            {props.renderTeam(props.props)}
            {props.renderPlayers(props.props, 'Forward')} 
            {props.renderPlayers(props.props, 'Midfielder')}
            {props.renderPlayers(props.props, 'Defender')}
            {props.renderPlayers(props.props, 'Goalkeeper')}
        </>
    )  
} 

export default Team
