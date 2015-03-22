var sessionstorageMock = {};
var _items = {};

sessionstorageMock.setItem = function (key, value) {
  _items[key] = value;
};

sessionstorageMock.getItem = function (key) {
  return _items[key];
};

sessionstorageMock.removeItem = function (key) {
  delete _items[key];
};

module.exports = sessionstorageMock;