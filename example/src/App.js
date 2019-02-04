import React, { Component } from 'react';
import { Icon } from '@zauberware/react-svg-assets'

class App extends Component {
  render() {
    return (
      <main>
        <h3>Default:</h3>
        <Icon icon="default" />
        <h3>Rotate:</h3>
        <Icon icon="arrow" rotate="180"/>
        <h3>Sizes:</h3>
        <Icon icon="arrow" size={0} />
        <Icon icon="arrow" size={1} />
        <Icon icon="arrow" size={2} />
        <Icon icon="arrow" size={3} />
      </main>
    );
  }
}

export default App;
