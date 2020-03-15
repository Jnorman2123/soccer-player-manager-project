export default function transferReducer(state = { transfers: [], requesting: false }, action) {
    switch (action.type) {
        case 'START_ADD_TRANSFER_REQUEST':
            return {
                ...state,
                transfers: [...state.transfers],
                requesting: true
            }
        case 'ADD_TRANSFER':
            return {
                ...state,
                transfers: [...state.transfers, action.transfer],
                requesting: false
            }
        case 'DELETE_TRANSFER':
            return {
                ...state,
                transfers: [...state.transfers],
                requesting: true
            }
        default: 
            return state
    }
}