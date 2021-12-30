import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore } from 'redux-persist'
import { AuthReducer } from './reducers/AuthReducer'

export default (initialState) => {
  const store = createStore(AuthReducer, initialState, composeWithDevTools())
  const persistor = persistStore(store)
  return { store, persistor }
}
