import React from 'react'

const Players = (props) => {
    

    return <>
        {props.renderPlayers('Forward')} 
        {props.renderPlayers('Midfielder')}
        {props.renderPlayers('Defender')}
        {props.renderPlayers('Goalkeeper')}
    </>
}

export default Players 