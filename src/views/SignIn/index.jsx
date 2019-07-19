// Externals
import React, {Component} from 'react';
import {Provider} from 'react-redux';

// Internals
import createStore from './store';
import Container from './container';

export default class SignIn extends Component {

  constructor(props) {
    super(props);
    this.store = createStore({}, process.env.NODE_ENV);
  }

  render() {
    return (
      <Provider store={this.store}>
        <Container/>
      </Provider>
    )
  }
}
