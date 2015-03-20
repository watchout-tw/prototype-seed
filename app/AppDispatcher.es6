import {Dispatcher} from "flux";


class AppDispatcher extends Dispatcher {
  handleViewAction(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action
    });
  }
}
export default new AppDispatcher();
