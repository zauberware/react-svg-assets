![Official SVG logo](svg-logo.png)
# react-svg-assets
A simple SVG asset provider for React (^16.3.0) .. or better (^16.6.0). Work in progress

## Getting Started

### Prequisites
This module depends on the **NEW Context API** as introduced in React 16.3.0. You can read more about the Context API in the [official documentation](https://reactjs.org/docs/context.html) or try our [soon to be written tutorial]()

### Installation
```
npm install react-svg-assets
```

### Usage
This package comes with a predefined minimal icon set. Your SVG paths can be defined before using the Provider.

main.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { IconProvider } from 'react-svg-assets';
import './index.css';
import App from './App';

export const myIcons = {
  'myIcon': 'M 512 [...] -512 Z'
}

ReactDOM.render(
  <IconProvider icons={myIcons}>
    <App />
  </IconProvider>
  , document.getElementById('root'));
```

App.js
```javascript
import React, { Component } from 'react';
import { Icon } from 'react-svg-assets'

class App extends Component {
  render() {
    return (
      <main>
        <Icon width="32" height="32" color="black" icon="myIcon" viewBox="0 0 1024 1024" />
      </main>
    );
  }
}

export default App;

```

### PropTypes
Icon.propTypes
```javascript
Icon.propTypes = {
  icon: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  viewBox: PropTypes.string,
}
```

### Issues
The current version of this package is only useful for displaying single path SVGs. File import and a more-sophisticated use is planned for further releases.

### Todos
- Testing
- Demo page
- File Import
- Fallback for vi
