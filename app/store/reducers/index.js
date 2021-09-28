import {combineReducers } from 'redux'

import expensesReducer from './expenses'

export default combineReducers({
  expenses: expensesReducer
})