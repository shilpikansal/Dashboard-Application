import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./reducers/MainReducer";
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage';



const persistConfig = {
	key: 'root',
	storage: storage,
  whitelist:['user']
}

const persistReducer1 = persistReducer(persistConfig, rootReducer)

export const store = compose(createStore(persistReducer1, applyMiddleware(thunk)))

	export const persistor = persistStore(store);
