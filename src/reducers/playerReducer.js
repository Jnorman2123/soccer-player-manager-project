export default function playerReducer( state = { players: [], action}) {
    switch(action.type) {
        case 'ADD_PLAYER':
            return {
                ...state,
                players: [...state.players, action.player]
            }
        default: 
            return state
    }
}
