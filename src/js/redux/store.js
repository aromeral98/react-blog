import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore } from 'redux-persist'

export default (initialState) => {
  const reducers = combineReducers({

  })

  const store = createStore(reducers, initialState, composeWithDevTools())
  const persistor = persistStore(store)
  return { store, persistor }
}
