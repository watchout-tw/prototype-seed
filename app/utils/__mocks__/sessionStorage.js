var sessionStorageMock = {};
var _items = {};

sessionStorageMock.setItem = function (key, value) {
  _items[key] = value;
};

sessionStorageMock.getItem = function (key) {
  return _items[key];
};

sessionStorageMock.removeItem = function (key) {
  delete _items[key];
};

module.exports = sessionStorageMock;