export default function transferReducer(state = { transfers: [], requesting: false }, action) {
    switch (action.type) {
        case 'START_ADD_TEAM_REQUEST':
            return {
                ...state,
                teams: [...state.teams],
                requesting: true
            }
        case 'ADD_TEAM': 
            return {
                ...state,
                teams: [...state.teams, action.team],
                requesting: false
            }
        default: 
            return state
    }
}