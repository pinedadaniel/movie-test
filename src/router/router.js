import React from 'react';
import {  BrowserRouter , Switch, Route, } from 'react-router-dom';




function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"/>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
