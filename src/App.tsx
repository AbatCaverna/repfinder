import React from 'react';
import { Router, Switch, Route, Redirect } from "react-router-dom"

import history from './services/history';

//styles
import GlobalStyle from './globalStyles';

//pages
import Login from './pages/login'
import Error from './pages/error'

function App() {
  return (
      <Router history={history}>
        <Switch>
          <Route exact path="/login" component= {Login}/>
          <Route exact path="/" component= {Error}/>
          <Redirect from="*" to="/" />
        </Switch>
        <GlobalStyle/>
      </Router>
  );
}

export default App;
