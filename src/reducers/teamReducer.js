export default function teamReducer(state = { teams: [], requesting: false }, action) {
    switch (action.type) {
        case 'START_ADDING_TEAMS_REQUEST':
            return {
                ...state,
                teams: [...state.teams],
                requesting: true
            }
        case 'ADD_TEAMS':
            return {
                ...state,
                teams: action.teams,
                requesting: false
            }
        case 'ADD_TEAM': 
            return {
                ...state,
                teams: [...state.teams, action.team]
            }
        default:
            return state
    }
}