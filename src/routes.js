import React from 'react'
import {Switch, Route} from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import Users from './Components/Users'
import SubmitUser from './Components/SubmitUser'

export default (
  <Switch>
    <Route exact path = '/' component={LandingPage} />
    <Route path = '/users' component={Users} />
    <Route exact path = '/form' component={SubmitUser} />
    <Route path = '/form/:id' component={SubmitUser} />
  </Switch>
)