export function fetchTeams() {
    return (dispatch) => {
        console.log('hello')
        dispatch({type: 'START_ADDING_TEAMS_REQUEST' })
        fetch('http://localhost:3001/teams')
            .then(resp => resp.json())
            .then(teams => console.log(teams))
    }
}

export function addTeam(team) {
    return { 
        type: 'ADD_TEAM',
        team: team
    }
}

// dispatch({ type: 'ADD_TEAMS', teams})