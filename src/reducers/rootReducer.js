import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import playerReducer from './playerReducer'
import teamReducer from './teamReducer'
import transferReducer from './transferReducer'


const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    teams: teamReducer,
    players: playerReducer,
    transfers: transferReducer

})

export default rootReducer