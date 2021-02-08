import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import React from 'react'

import Register from '../screen/Register'
import Login from '../screen/Login'

export default function Routes(){
    
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Register}/>
                <Route exact path='/signin' component={Login}/>
            </Switch>
        </BrowserRouter>
    )
}