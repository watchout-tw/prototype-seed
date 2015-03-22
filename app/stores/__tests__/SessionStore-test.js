jest.dontMock('../Store');
jest.dontMock('../SessionStore');

describe('AuthStore', function() {
  var ActionTypes = require("../../constants/ActionTypes");

  var actionSignin = {
    source: 'SERVER_ACTION',
    action: {
      actionType: ActionTypes.LOGIN_RESPONSE,
      data: { msg: "login success", accessToken: "test-token"}
    }
  };

  var actionLogout = {
    source: 'VIEW_ACTION',
    action: {
      actionType: ActionTypes.LOGOUT_REQUEST
    }
  };

  var AppDispatcher;
  var SessionStore;
  var callback;

  beforeEach( function() {
    AppDispatcher = require("../../AppDispatcher");
    SessionStore = require("../SessionStore");
    callback = AppDispatcher.register.mock.calls[0][0];
  });

  it('registers a callback with the dispatcher', function() {
    expect(AppDispatcher.register.mock.calls.length).toBe(1);
  });

  it('should initialize with null accessToken', function() {
    expect(SessionStore.getToken()).toBeUndefined();
  });

  it('should have accessToken when login responsed', function () {
    callback(actionSignin);
    expect(SessionStore.getToken()).toBe('test-token');
  });

  it('should delete accessToken when logout', function () {
    callback(actionLogout);
    expect(SessionStore.getToken()).toBe(null);
  });

});