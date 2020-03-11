import React from 'react'
import { Route, Switch } from 'react-router'
import Teams from './components/teams/Teams'
import NavBar from './components/nav/NavBar'

const routes = (
    <div>
        <NavBar />
        <Switch>
            <Route exact path='/teams' component={Teams} />
        </Switch>
    </div>
)

export default routes