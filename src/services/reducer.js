import { combineReducers } from 'redux';

/** Services reducers **/
import confirm from './confirm';
import env from './env';
import modals from './modals';
import session from './session';
import transactions from './transactions';

const servicesReducer = combineReducers({
  confirm,
  env,
  modals,
  session,
  transactions,
});

export default (state = {}, action) => {
  switch (action.type) {
    default:
      return servicesReducer(state, action);
  }
};
