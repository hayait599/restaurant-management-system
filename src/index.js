import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/index';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './app/reducers/index';
import rootSaga from './app/saga/index';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
 
    <Provider store={store}>
      <App />
    </Provider>
  
  
  , document.getElementById('root'));
registerServiceWorker();
