import { createStore, combineReducers } from 'redux';

import profileTabReducer from '../reducer/reducer';

const rootReducer = combineReducers(
  profileTabReducer
);

const configureStore = () => {
    return createStore(profileTabReducer);
}

export default configureStore;