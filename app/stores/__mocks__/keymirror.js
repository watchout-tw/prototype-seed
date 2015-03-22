var keymirrorMock = function (obj) {
  Object.keys(obj).forEach(function (key) {
    obj[key] = key;
  });
  return obj;
};

module.exports = keymirrorMock;