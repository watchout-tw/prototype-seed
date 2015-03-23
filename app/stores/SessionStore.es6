import Store from "./Store";
import AppDispatcher from "../AppDispatcher";
import ActionTypes from "../constants/ActionTypes";
// __mocks__ should be related to path
import sessionStorage from "../utils/sessionStorage";

class SessionStore extends Store {
  constructor() {
    this.accessToken = sessionStorage.getItem("accessToken");
  }

  setToken (token) {
    sessionStorage.setItem('accessToken', token);
    this.accessToken = token;
    this.emitChange();
  }

  getToken () {
    return this.accessToken;
  }

  removeToken () {
    sessionStorage.removeItem('accessToken');
    this.accessToken = null;
    this.emitChange();
  }
}

var session = new SessionStore();

AppDispatcher.register(function({action}:payload) {
  var {actionType, data} = action;
  switch(actionType) {
    case ActionTypes.LOGIN_RESPONSE:
      session.setToken(data.accessToken);
      break;
    case ActionTypes.LOGOUT_REQUEST:
      session.removeToken();
      break;
    default:
      return true;
  }
  return true;
});

export default session;
