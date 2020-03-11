export default function teamReducer(state = { teams: [] }, action) {
    switch (action.type) {
        case 'ADD_TEAM': 
            return {
                ...state,
                teams: [...state.teams, action.team]
            }
        default:
            return state
    }
}