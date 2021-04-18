import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {AuthProvider} from './contexts/authContext';
import {AlertProvider} from './contexts/alert/alertContext';

ReactDOM.render(
  <React.StrictMode>
    <AlertProvider>
      <AuthProvider>
        <App />

      </AuthProvider>
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


