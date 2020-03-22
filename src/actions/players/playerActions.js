export function fetchPlayers() {
    return (dispatch) => {
        dispatch({type: 'START_LOADING_PLAYERS_REQUEST' })
        fetch('http://localhost:3001/players')
            .then(resp => resp.json())
            .then(players => dispatch({ type: 'LOAD_PLAYERS', players}))
    }
}

export function fetchPlayer(id) {
    return (dispatch) => {
        dispatch({type: 'START_LOAD_PLAYER_REQUEST'})
        return fetch(`http://localhost:3001/players/${id}`)
            .then(resp => resp.json())
            .then(player => dispatch({type: 'LOAD_PLAYER', player}))
    }
}

export function addPlayer(player, props) {
    return (dispatch) => { 
        dispatch({type: 'START_ADD_PLAYER_REQUEST'})
        return fetch('http://localhost:3001/players', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(player)
        })
            .then(resp => resp.json())
            .then(playerData => {
                const value = parseInt(playerData.value)
                dispatch({
                    type: 'ADD_PLAYER',
                    player: {
                        name: playerData.name,
                        position: playerData.position,
                        value: value
                    }
                })
                if (!playerData.errors) {
                    props.history.push(`/players/${playerData.id}`)
                } else {
                    props.history.push({
                        pathname: '/errors',
                        response: playerData
                    })
                }  
            })
        
    }
}

export function editPlayer(player, id, props) {
    return (dispatch) => { 
        dispatch({type: 'START_EDIT_PLAYER_REQUEST'})
        return fetch(`http://localhost:3001/players/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(player)
        })
            .then(resp => resp.json())
            .then(playerData => {
                const value = parseInt(playerData.value)
                dispatch({
                    type: 'EDIT_PLAYER',
                    player: {
                        name: playerData.name,
                        position: playerData.position,
                        value: value
                    }
                })
                if (!playerData.errors) {
                    props.history.push(`/players/${playerData.id}`)
                } else {
                    props.history.push({
                        pathname: '/errors',
                        response: playerData
                    })
                }  
            })
        
    }
}

export function deletePlayer(id) {
    return (dispatch) => {
        dispatch({type: 'START_DELETE_PLAYER_REQUEST'})
        return fetch(`http://localhost:3001/players/${id}`, {
            method: 'DELETE',
        })
    }

}