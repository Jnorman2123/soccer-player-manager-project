import React from 'react'

const Players = (props) => <>
    {props.renderPlayers('Forward')} 
    {props.renderPlayers('Midfielder')}
    {props.renderPlayers('Defender')}
    {props.renderPlayers('Goalkeeper')}
</>

export default Players 