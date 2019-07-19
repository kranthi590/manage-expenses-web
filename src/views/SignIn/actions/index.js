export const Actions = {
  LOGIN_COMPONENT_INIT: 'LOGIN_COMPONENT_INIT',
  CHANGE_EMAIL: 'CHANGE_EMAIL',
  CHANGE_PASSWORD: 'CHANGE_PASSWORD',
  UPDATE_ERRORS: 'UPDATE_ERRORS',
  SUBMIT_LOGIN: 'SUBMIT_LOGIN'
};

export function raiseAction(type, payload) {
  return {
    type,
    payload
  };
}
