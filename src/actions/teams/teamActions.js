export function fetchTeams() {
    return (dispatch) => {
        dispatch({type: 'START_ADDING_TEAMS_REQUEST' })
        fetch('http://localhost:3001/teams')
            .then(resp => resp.json())
            .then(teams => dispatch({ type: 'ADD_TEAMS', teams}))
    }
}

export function addTeam(team) {
    return { 
        type: 'ADD_TEAM',
        team: team
    }
}

