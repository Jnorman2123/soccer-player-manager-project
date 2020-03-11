import { createBrowserHistory } from 'history'
import { applyMiddleWare, compose, createStore } from 'redux'
import { routerMiddleWare } from 'connected-react-router'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

export const history = createBrowserHistory()

export default function configureStore(preloadedState) {
    const store = createStore(
        rootReducer(history),
        preloadedState,
        compose(
            applyMiddleWare(
                routerMiddleWare(history),
                thunk
            )
        )
    )
    return store
} 
