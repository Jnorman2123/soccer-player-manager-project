import React from 'react'
import { Route, Switch } from 'react-router'
import TeamsContainer from './containers/TeamsContainer'
import TeamContainer from './containers/TeamContainer'
import PlayerContainer from './containers/PlayerContainer'
import PlayersContainer from './containers/PlayersContainer'
import TransferContainer from './containers/TransferContainer'
import NavBar from './components/nav/NavBar'
import Home from './components/home/Home'
import TeamForm from './components/teams/TeamForm'
import EditTeamForm from './components/teams/EditTeamForm'
import PlayerForm from './components/players/PlayerForm'
import EditPlayerForm from './components/players/EditPlayerForm'
import NoMatch from './components/nomatch/NoMatch'
import Errors from './components/nomatch/Errors'

const routes = (
    <div>
        <NavBar />
        <Switch>
            <Route exact path='/' component={Home} />}
            <Route exact path='/teams' component={TeamsContainer} />
            <Route exact path='/players' component={PlayersContainer} />
            <Route exact path='/teams/new' component={TeamForm} />
            <Route exact path='/teams/:teamID' component={TeamContainer} />
            <Route exact path='/players/new' component={PlayerForm} />
            <Route exact path='/players/:playerID' component={PlayerContainer} />
            <Route exact path='/teams/:teamID/edit' component={EditTeamForm} />
            <Route exact path='/players/:playerID/edit' component={EditPlayerForm} />
            <Route exact path='/teams/:teamID/transfer' component={TransferContainer} />
            <Route exact path='/errors' component={Errors} />
            <Route component={NoMatch} /> 
        </Switch>
    </div>
)

export default routes