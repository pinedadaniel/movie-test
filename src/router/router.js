import React from 'react';
import {  BrowserRouter , Switch, Route, } from 'react-router-dom';
import Login from '../containers/login/index';




function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
