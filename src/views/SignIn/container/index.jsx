// Externals
import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import validator from 'validator';

// Internals
import {raiseAction, Actions} from '../actions';
import LoginComponent from '../components'
import {FIELDS} from "../constants";

export class Container extends React.Component {

  componentDidMount() {
    const {actions} = this.props;
    actions.raiseAction(Actions.LOGIN_COMPONENT_INIT);
  }

  onChangeHandler = (event) => {
    const {actions} = this.props;
    const {name, value} = event.target;
    actions.raiseAction(name === FIELDS.EMAIL ? Actions.CHANGE_EMAIL : Actions.CHANGE_PASSWORD, value);
  };

  onFormSubmitHandler = () => {
    const {actions, email, password} = this.props;
    actions.raiseAction(Actions.UPDATE_ERRORS, {
      key: FIELDS.EMAIL,
      value: validator.isEmail(email) ? null : 'Email is not a valid email'
    });
    actions.raiseAction(Actions.UPDATE_ERRORS, {
      key: FIELDS.PASSWORD,
      value: validator.isEmpty(password) ? 'Password is required' : null
    });
    actions.raiseAction(Actions.SUBMIT_LOGIN);
  };

  onBlurHandler = (event) => {
    const {actions, email, password} = this.props;
    const {name, value} = event.target;
    if (name === FIELDS.EMAIL) {
      actions.raiseAction(Actions.UPDATE_ERRORS, {
        key: FIELDS.EMAIL,
        value: validator.isEmail(email) ? null : 'Email is not a valid email'
      });
    } else {
      actions.raiseAction(Actions.UPDATE_ERRORS, {
        key: FIELDS.PASSWORD,
        value: validator.isEmpty(password) ? 'Password is required' : null
      });
    }
  };

  render() {

    const {
      email,
      password,
      isLoading,
      errors
    } = this.props;

    const loginProps = {
      email,
      password,
      isLoading,
      errors,
      onChangeHandler: this.onChangeHandler,
      onFormSubmitHandler: this.onFormSubmitHandler,
      onBlurHandler: this.onBlurHandler
    };

    return (
      <LoginComponent {...loginProps}/>
    );

  }
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({raiseAction}, dispatch)
});

export default (connect(
  mapStateToProps,
  mapDispatchToProps
)(Container));
