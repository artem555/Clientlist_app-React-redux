import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import api from '../apis';

const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument(api)));

export default store;
