import { configureStore } from '@reduxjs/toolkit'
import menuReducer from '../features/menu/menuSlice'
import mapReducer from '../features/map/mapSlice'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  map: mapReducer,
  menu: menuReducer
});

const store = configureStore({
  reducer: {
      store: rootReducer
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch