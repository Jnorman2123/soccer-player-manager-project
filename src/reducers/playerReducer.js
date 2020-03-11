export default function playerReducer( state = { players: [] }, action) {
    switch (action.type) {
        case 'START_ADDING_PLAYERS_REQUEST':
            return {
                ...state,
                players: [...state.players],
                requesting: true
            }
        case 'ADD_PLAYERS':
            return {
                ...state,
                players: action.players,
                requesting: false
            }
        case 'ADD_PLAYER':
            return {
                ...state,
                players: [...state.players, action.player]
            }
        default: 
            return state
    }
}
