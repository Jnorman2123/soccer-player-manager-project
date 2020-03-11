import React from 'react'
import { Route, Switch } from 'react-router'
import TeamContainer from './containers/TeamContainer'

const routes = (
    <div>
        <Switch>
            <Route exact path='/teams' component={TeamContainer} />
        </Switch>
    </div>
)