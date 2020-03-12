import React from 'react'
import { Route, Switch } from 'react-router'
import Teams from './components/teams/Teams'
import Players from './components/players/Players'
import NavBar from './components/nav/NavBar'
import Home from './components/home/Home'
import TeamForm from './components/teams/TeamForm'

const routes = (
    <div>
        <NavBar />
        <Switch>
            <Route exact path='/' component={Home} />}
            <Route exact path='/teams' component={Teams} />
            <Route exact path='/players' component={Players} />
            <Route exact path='/teams/new' component={TeamForm} />
        </Switch>
    </div>
)

export default routes