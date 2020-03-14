import React from 'react'
import { Route, Switch } from 'react-router'
import TeamsContainer from './containers/TeamsContainer'
import TeamContainer from './containers/TeamContainer'
import PlayerContainer from './containers/PlayerContainer'
import PlayersContainer from './containers/PlayersContainer'
import NavBar from './components/nav/NavBar'
import Home from './components/home/Home'
import TeamForm from './components/teams/TeamForm'
import EditTeamForm from './components/teams/EditTeamForm'

const routes = (
    <div>
        <NavBar />
        <Switch>
            <Route exact path='/' component={Home} />}
            <Route exact path='/teams' component={TeamsContainer} />
            <Route exact path='/players' component={PlayersContainer} />
            <Route exact path='/teams/new' component={TeamForm} />
            <Route exact path='/teams/:teamID' component={TeamContainer} />
            <Route exact path='/players/:playerID' component={PlayerContainer} />
            <Route exact path='/teams/:teamID/edit' component={EditTeamForm} />
        </Switch>
    </div>
)

export default routes