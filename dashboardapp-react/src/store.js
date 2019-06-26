import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./reducers/MainReducer";

let store;

store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
