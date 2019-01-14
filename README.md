![Official SVG logo](svg-logo.png)
# react-svg-assets
A simple SVG asset provider for React (^16.3.0) .. or better (^16.6.0). Work in progress.

## Getting Started

### Prequisites
This module depends on the **NEW Context API** as introduced in React 16.3.0. You can read more about the Context API in the [official documentation](https://reactjs.org/docs/context.html) or try our [soon to be written tutorial]()

### Installation
```
npm install @zauberware/react-svg-assets
```

### Usage
This package does not contain an predefined icon set, so your SVGs must be defined before using the Provider.
The icon set shall be function which returns a complete set or a single icon by name, this approach is giving us a higher flexibility when we try to display conditional or dynamic icons.

You can also the withIcons HOC (Higher-Order-Component), if you need your icons outside the IconProvider or if you don't use the Provider pattern.

For more conveniece 'styled-compenets' are included. You can override the theme values and inject your custom theme via props. Common use cases like 'rotate' or different sizes, can also be controlled via props.

main.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { IconProvider } from '@zauberware/react-svg-assets';
import './index.css';
import App from './App';
import myIcons from './myIcons'

ReactDOM.render(
  <IconProvider icons={myIcons}>
    <App />
  </IconProvider>
  , document.getElementById('root'));
```

myIcons.js
```javascript
import MyIcon from './path-to-my-assets/icon.svg'

export default (_icon) => {
  const icons = {
    'myIconName': MyIcon,
  }
  return _icon ? icons[_icon] : icons
}

```

App.js
```javascript
import React, { Component } from 'react';
import { Icon } from 'react-svg-assets'

class App extends Component {
  render() {
    return (
      <main>
        <Icon icon="myIconName" />
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
  icons: PropTypes.function,
}
```

### Todos
- Testing
- Demo page
