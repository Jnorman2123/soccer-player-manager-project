// export function fetchTeams() {
//     return (dispatch) => {
//         dispatch({type: 'START_LOADING_TEAMS_REQUEST' })
//         return fetch('http://localhost:3001/teams')
//             .then(resp => resp.json())
//             .then(teams => dispatch({ type: 'LOAD_TEAMS', teams}))
//     }
// }

export function addTransfer(transfer) {
    return (dispatch) => { 
        dispatch({type: 'START_ADD_TRANSFER_REQUEST'})
        return fetch('http://localhost:3001/transfers/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(transfer)
        })
            .then(resp => resp.json())
            .then(transferData => {
                dispatch({
                    type: 'ADD_TRANSFER',
                    transfer: {
                        team_id: transferData.team_id,
                        player_id: transferData.player_id,
                    }
                })
            })
    }
}

// export function editTeam(team, id) {
//     return (dispatch) => { 
//         dispatch({type: 'START_EDIT_TEAM_REQUEST'})
//         return fetch(`http://localhost:3001/teams/${id}`, {
//             method: 'PATCH',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             },
//             body: JSON.stringify(team)
//         })
//             .then(resp => resp.json())
//             .then(teamData => {
//                 const salary_cap = parseInt(teamData.salary_cap)
//                 dispatch({
//                     type: 'EDIT_TEAM',
//                     team: {
//                         name: teamData.name,
//                         formation: teamData.formation,
//                         salary_cap: salary_cap
//                     }
//                 })
//             })
        
//     }
// }

export function deleteTransfer(id) {
    return (dispatch) => {
        dispatch({type: 'START_DELETE_TRANSFER_REQUEST'})
        return fetch(`http://localhost:3001/transfers/${id}`, {
            method: 'DELETE',
        })
    }

}