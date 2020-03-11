import React from 'react'
import { Route, Switch } from 'react-router'
import Teams from './components/teams/Teams'

const routes = (
    <div>
        <Switch>
            <Route exact path='/teams' component={Teams} />
        </Switch>
    </div>
)

export default routes