import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components'
import { IconProvider } from '@zauberware/react-svg-assets';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import icons from './icons'
import theme from './theme'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <IconProvider icons={icons}>
      <App />
    </IconProvider>
  </ThemeProvider>
  ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
