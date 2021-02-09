import { Switch, Route } from 'react-router-dom'
import React from 'react'
import Dashboard from '../components/Dashboard'


export default function Routes(){
    
    return(
        <Switch>
           <Route path='/app/dashboard' component={Dashboard}/>
        </Switch>
    )
}