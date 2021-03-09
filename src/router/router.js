import React from 'react';
import {  BrowserRouter , Switch, Route, } from 'react-router-dom';
import Login from '../containers/login/index';
import Home from "../containers/home"
import Details from "../containers/details"

function Router() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>s
        <Route exact path="/details" component={Details}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
