
export default function teamReducer(state = { teams: [], requesting: false }, action) {

    switch (action.type) {
        case 'START_LOADING_TEAMS_REQUEST':
            return {
                ...state,
                requesting: true,

            }
        case 'LOAD_TEAMS':
            return {
                ...state,
                teams: action.teams,
                requesting: false
            }
        case 'START_LOAD_TEAM_REQUEST':
            return {
                ...state,
                requesting: true
            }
        case 'LOAD_TEAM':
            return {
                ...state, 
                teams: action.team,
                requesting: false
            }
        case 'START_ADD_TEAM_REQUEST':
            return {
                ...state,
                requesting: true
            }
        case 'ADD_TEAM': 
            return {
                ...state,
                teams: [...state.teams, action.team],
                requesting: false
            }
        case 'START_DELETE_TEAM_REQUEST':
            return {
                ...state,
                requesting: true
            }

        case 'START_EDIT_TEAM_REQUEST':
            return {
                ...state,
                requesting: true
            }
        case 'EDIT_TEAM':
            return {
                ...state,
                teams: action.team,
                requesting: false
            }
        default:
            return state
    }
}