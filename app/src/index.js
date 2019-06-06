import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import configureStore from './store';
import Root from './root';
import './styles/main.scss';
export const history = createHistory();
const store = configureStore();
render((
  <Provider store={store} history={history} >
    <HashRouter>
      <Root />
    </HashRouter>
  </Provider>
), document.getElementById('root'));
