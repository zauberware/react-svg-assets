import React from 'react';
import ReactDOM from 'react-dom';
import { IconProvider } from '@zauberware/react-svg-assets';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import myIcons from './myIcons'

ReactDOM.render(
  <IconProvider icons={myIcons}>
    <App />
  </IconProvider>
  ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
