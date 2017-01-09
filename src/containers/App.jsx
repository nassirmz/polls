import React, { Component, PropTypes } from 'react';

import Header from 'Header';
import Signup from 'Signup';

const propTypes = {
  children: PropTypes.element.isReguired,
};

class App extends Component {
  render() {
    const children = this.props.children;
    return (
      <div>
        <Header />
        {children}
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;