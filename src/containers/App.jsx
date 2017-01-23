import React, { Component, PropTypes } from 'react';

import Header from 'Header';

const propTypes = {
  children: PropTypes.node,
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