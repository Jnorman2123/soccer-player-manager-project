export function fetchTeams() {
    return (dispatch) => {
        dispatch({type: 'START_LOADING_TEAMS_REQUEST' })
        return fetch('http://localhost:3001/teams')
            .then(resp => resp.json())
            .then(teams => dispatch({ type: 'LOAD_TEAMS', teams}))
    }
}

export function addTeam(team) {
    return (dispatch) => { 
        dispatch({type: 'START_ADD_TEAM_REQUEST'})
        return fetch('http://localhost:3001/teams', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(team)
        })
            .then(resp => resp.json())
            .then(teamData => {
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
            .catch(error => console.log(error))
        
    }
}

export function editTeam(team, id) {
    return (dispatch) => { 
        dispatch({type: 'START_EDIT_TEAM_REQUEST'})
        return fetch(`http://localhost:3001/teams/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(team)
        })
            .then(resp => resp.json())
            .then(teamData => {
                const salary_cap = parseInt(teamData.salary_cap)
                dispatch({
                    type: 'EDIT_TEAM',
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
    return (dispatch) => {
        dispatch({type: 'START_DELETE_TEAM_REQUEST'})
        return fetch(`http://localhost:3001/teams/${id}`, {
            method: 'DELETE',
        })
    }

}

