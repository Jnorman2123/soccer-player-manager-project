import React from 'react'
import { Route, Switch } from 'react-router'
import Teams from './components/teams/Teams'
import Players from './components/players/Players'
import NavBar from './components/nav/NavBar'
import Home from './components/home/Home'

const routes = (
    <div>
        <NavBar />
        <Switch>
            <Route exact path='/' component={Home} />}
            <Route exact path='/teams' component={Teams} />
            <Route exact path='/players' component={Players} />
        </Switch>
    </div>
)

export default routes