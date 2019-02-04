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
        <h3>Maned Sizes:</h3>
        <Icon icon="arrow" mini />
        <Icon icon="arrow" />
        <Icon icon="arrow" medium />
        <Icon icon="arrow" large />
        <h3>Sizes Level:</h3>
        <Icon icon="arrow" size={0} />
        <Icon icon="arrow" size={1} />
        <Icon icon="arrow" size={2} />
        <Icon icon="arrow" size={3} />
        <h3>Custom size:</h3>
        <Icon icon="arrow" width='500px' height='200px'/>
      </main>
    );
  }
}

export default App;
