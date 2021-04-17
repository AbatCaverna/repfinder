import React from 'react';
import { Router, Switch, Route, Redirect } from "react-router-dom"

import history from './services/history';

//styles
import GlobalStyle from './globalStyles';

//pages
import Login from './pages/login'

function App() {
  return (
      <Router history={history}>
        <Switch>
          <Route exact path="/login" component= {Login}/>
          <Redirect from="*" to="/" />
        </Switch>
        <GlobalStyle/>
      </Router>
  );
}

export default App;
