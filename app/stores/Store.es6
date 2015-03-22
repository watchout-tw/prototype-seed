import {EventEmitter} from "events";

const CHANGE_EVENT = "change";

class Store extends EventEmitter {
  emitChange () {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener (next) {
    this.on(CHANGE_EVENT, next);
  }

  removeChangeListener (next) {
    this.removeListener(CHANGE_EVENT, next);
  }
}

export default Store;