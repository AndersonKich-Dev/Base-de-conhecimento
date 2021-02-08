import React from 'react';
import ReactDOM from 'react-dom';
import Register from './screen/Register'
import Login from './screen/Login'
import Template from './screen/template'
import GlobalStyles from './styles/GlobalStyles'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles/>

    <BrowserRouter>
      <div>
        <Switch>
          <Route  path='/app' component={Template}/>  
          <Route exact path='/' component={Register}/>
          <Route exact path='/signin' component={Login}/>
        </Switch>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

