import React, { Component } from 'react';
import { Provider } from 'react-redux';

export default class Root extends Component {
  render() {
    return (
      <Provider>
        <div>Hello World</div>
      </Provider>
    )
  }
}
