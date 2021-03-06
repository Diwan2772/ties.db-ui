import { combineReducers } from 'redux';

/** Services reducers **/
import env from './env';
import modals from './modals';
import transactions from './transactions';

const servicesReducer = combineReducers({
  env,
  modals,
  transactions,
});

export default (state = {}, action) => {
  switch (action.type) {
    default:
      return servicesReducer(state, action);
  }
};
