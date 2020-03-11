import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

export const history = createBrowserHistory()

export default function configureStore(preloadedState) {
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const store = createStore(
        rootReducer(history),
        preloadedState,
        composeEnhancer(
            applyMiddleware(
                routerMiddleware(history),
                thunk
            )
        )
    )
    return store
} 
