export default function playerReducer( state = { players: [], requesting: false }, action) {
    switch (action.type) {
        case 'START_LOADING_PLAYERS_REQUEST':
            return {
                ...state,
                players: [...state.players],
                requesting: true
            }
        case 'LOAD_PLAYERS':
            return {
                ...state,
                players: action.players,
                requesting: false
            }
        case 'START_ADD_PLAYER_REQUEST':
            return {
                ...state,
                players: [...state.players],
                requesting: true
            }
        case 'ADD_PLAYER': 
            return {
                ...state,
                players: [...state.players, action.player],
                requesting: false
            }
        case 'START_DELETE_PLAYER_REQUEST':
            return {
                ...state, 
                requesting: true
            }
    
        case 'START_EDIT_PLAYER_REQUEST':
            return {
                ...state,
                players: [...state.players],
                requesting: true
            }
        case 'EDIT_PLAYER':
            return {
                ...state,
                players: [...state.players, action.player],
                requesting: false
            }
        default: 
            return state
    }
}
