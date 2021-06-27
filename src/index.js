import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './Components/App';
import { Provider } from 'react-redux';
import {store, persistedStore} from './app/store';
import { PersistGate } from 'redux-persist/es/integration/react'

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={ null} persistor = {persistedStore}>
         <Router>
           <BrowserRouter>
        <App />
        </BrowserRouter>
         </Router>
         </PersistGate>
         </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

