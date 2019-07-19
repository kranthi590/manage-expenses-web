import {Actions, raiseAction} from '../actions';

export default store => next => action => {
  next(action);
  switch (action.type) {
    case Actions.SUBMIT_LOGIN:
      submitLogin(store);
      break;
  }
};

export const submitLogin = async (store, url) => {
  const {
    errors,
    email,
    password
  } = store.getState();
  if (Object.keys(errors).length === 0) {
    console.log('ok....');
  } else {
    console.log('not ok....');
  }
};
