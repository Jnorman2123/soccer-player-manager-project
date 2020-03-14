import React from 'react'
import { Route, Switch } from 'react-router'
import TeamContainer from './containers/TeamContainer'
import Team from './components/teams/Team'
import Players from './components/players/Players'
import NavBar from './components/nav/NavBar'
import Home from './components/home/Home'
import TeamForm from './components/teams/TeamForm'
import EditTeamForm from './components/teams/EditTeamForm'

const routes = (
    <div>
        <NavBar />
        <Switch>
            <Route exact path='/' component={Home} />}
            <Route exact path='/teams' component={TeamContainer} />
            <Route exact path='/players' component={Players} />
            <Route exact path='/teams/new' component={TeamForm} />
            <Route exact path='/teams/:teamID' component={Team} />
            <Route exact path='/teams/:teamID/edit' component={EditTeamForm} />
        </Switch>
    </div>
)

export default routes