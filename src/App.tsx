import React from 'react';
import { Router, Switch, Route, Redirect } from "react-router-dom"

import history from './services/history';

//styles
import GlobalStyle from './globalStyles';

//pages
import Login from './pages/login'
import Error from './pages/error'
import Register from './pages/singup'

function App() {
  return (
      <Router history={history}>
        <Switch>
          <Route exact path="/login" component= {Login}/>
          <Route exact path="/register" component= {Register}/>
          <Route exact path="/notfound" component= {Error}/>
          <Redirect exact from="/" to="/login" />
          <Redirect from="*" to="/notfound" />
        </Switch>
        <GlobalStyle/>
      </Router>
  );
}

export default App;
