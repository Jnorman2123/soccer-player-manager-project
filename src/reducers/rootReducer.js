import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import playerReducer from './playerReducer'
import teamReducer from './teamReducer'


const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    teams: teamReducer,
    players: playerReducer

})

export default rootReducer