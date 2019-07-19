import {Actions} from '../actions';

const isLoading = (state = false, action) => {
  switch (action.type) {
    case Actions.LOGIN_COMPONENT_INIT:
      return false;
    default:
      return state;
  }
};

const email = (state = '', action) => {
  switch (action.type) {
    case Actions.LOGIN_COMPONENT_INIT:
      return '';
    case Actions.CHANGE_EMAIL:
      return action.payload;
    default:
      return state;
  }
};


const password = (state = '', action) => {
  switch (action.type) {
    case Actions.LOGIN_COMPONENT_INIT:
      return '';
    case Actions.CHANGE_PASSWORD:
      return action.payload;
    default:
      return state;
  }
};

const errors = (state = {}, action) => {
  switch (action.type) {
    case Actions.LOGIN_COMPONENT_INIT:
      return {};
    case Actions.UPDATE_ERRORS:
      const copy = Object.assign({}, state);
      if (!action.payload.value) {
        delete copy[action.payload.key];
      } else {
        copy[action.payload.key] = action.payload.value;
      }
      return copy;
    default:
      return state;
  }
};

export default {
  isLoading,
  email,
  password,
  errors
};
