import { configureStore } from '@reduxjs/toolkit' 
import userReducer from '../features/userSlice';
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createStore, combineReducers, applyMiddleware } from 'redux'


export default configureStore ({
  reducer:{
    user:userReducer,
  },
})


const rootReducer =  combineReducers({
  user:userReducer,
 })
const persistConfig = {
 key:"root",
 storage,
 whitelist:['user']
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

 export const store = createStore(persistedReducer,applyMiddleware(thunk))

export const persistedStore = persistStore(store)

