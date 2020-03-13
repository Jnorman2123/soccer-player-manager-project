import { StaticRouter } from "react-router-dom"

export default function teamReducer(state = { teams: [], requesting: false }, action) {
    switch (action.type) {
        case 'START_ADDING_TEAMS_REQUEST':
            return {
                ...state,
                teams: [...state.teams],
                requesting: true
            }
        case 'ADD_TEAMS':
            return {
                ...state,
                teams: action.teams,
                requesting: false
            }
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