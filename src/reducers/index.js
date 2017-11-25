import { combineReducers } from 'redux'

import customers from './customers.reducer'
import store from './store.reducer'

const rootReducer = combineReducers({
  customers,
  store
})

export default rootReducer
