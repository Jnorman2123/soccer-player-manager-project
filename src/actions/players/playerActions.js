export function fetchPlayers() {
    return (dispatch) => {
        dispatch({type: 'START_LOADING_PLAYERS_REQUEST' })
        fetch('http://localhost:3001/players')
            .then(resp => resp.json())
            .then(players => dispatch({ type: 'LOAD_PLAYERS', players}))
    }
}

export function addPlayer(player) {
    return { 
        type: 'ADD_PLAYER',
        player: player
    }
}