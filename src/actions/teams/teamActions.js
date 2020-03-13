export function fetchTeams() {
    return (dispatch) => {
        dispatch({type: 'START_LOADING_TEAMS_REQUEST' })
        return fetch('http://localhost:3001/teams')
            .then(resp => resp.json())
            .then(teams => dispatch({ type: 'LOAD_TEAMS', teams}))
    }
}

// export function fetchTeam(id) {
//     return (dispatch) => {
//         dispatch({type: 'START_LOADING_TEAM_REQUEST'})
//         return fetch(`http://localhost:3001/teams/${id}`)
//             .then(resp => resp.json())
//             .then(team => {
//                 const teamId = team.id
//                 dispatch({type: 'LOAD_TEAM', teamId})
//             })
//     }
// } 

export function addTeam(team) {
    return (dispatch) => { 
        dispatch({type: 'START_ADD_TEAM_REQUEST'})
        return fetch('http://localhost:3001/teams', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(team)
        })
            .then(resp => resp.json())
            .then(teamData => {
                console.log(teamData)
                const salary_cap = parseInt(teamData.salary_cap)
                dispatch({
                    type: 'ADD_TEAM',
                    team: {
                        name: teamData.name,
                        formation: teamData.formation,
                        salary_cap: salary_cap
                    }
                })
            })
        
    }
}

export function deleteTeam(id) {
    console.log(id)
    return (dispatch) => {
        dispatch({type: 'START_DELETE_TEAM_REQUEST'})
        return fetch(`http://localhost:3001/teams/${id}`, {
            method: 'DELETE',
        })  .then(resp => resp.json())
            .then(dispatch => dispatch({type: 'DELETE_TEAM'}, id))
    }

}

