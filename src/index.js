import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './reducers';
import App from './routes/App';


const initialState = {
  'user': {},
  'locations': [
    {
      "venueLat": 19.42672619,
      "venueLon": -99.1718706,
      "venueName": "Platzi HQ CDMX"
    },
    {
      "venueLat": 4.6560716,
      "venueLon": -74.0595918,
      "venueName": "Platzi HQ Bogota"
    }
  ],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>,
  document.getElementById('app')
);
