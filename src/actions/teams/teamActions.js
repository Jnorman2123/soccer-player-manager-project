export function fetchTeams() {
    return (dispatch) => {
        dispatch({type: 'START_ADDING_TEAMS_REQUEST' })
        fetch('http://localhost:3001/teams')
            .then(resp => resp.json())
            .then(teams => dispatch({ type: 'ADD_TEAMS', teams}))
    }
}

export function addTeam(team) {
    return (dispatch) => { 
        dispatch({type: 'ADD_TEAM'})
        fetch('http://localhost:3001/teams', {
            method: 'POST',
            headers: {
                'Content Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(team)
        })
            .then(resp => resp.json())
            .then(teamData => {
                dispatch({
                    type: 'ADD_TEAM',
                    team: teamData
                })
            })
        
    }
}

