import {combineReducers } from 'redux'

import transactionReducer from './transactions'

export default combineReducers({
  transactions: transactionReducer
})