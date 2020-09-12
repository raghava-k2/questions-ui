import React from 'react';
import ReactDOM from 'react-dom';
import Main from './component/Main'
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Main></Main>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
