// This is just a simple wrapper.
// To solve webpack error: Cannot find module 'sessionStorage'.

function Store () {
  return sessionStorage;
}

module.exports = new Store();