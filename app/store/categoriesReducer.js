import axios from 'axios'

//ACTION TYPES
const GET_CATEGORIES = 'GET_CATEGORIES'
const GET_EXPENSES = 'GET_EXPENSES'

const ADD_EXPENSE = 'ADD_EXPENSE'

const DELETE_EXPENSES = 'DELETE_EXPENSE'
const UPDATE_EXPENSE = 'UPDATE_EXPENSE'

//ACTION CREATORS

const addExpense = expense => {
  return {
    type: ADD_EXPENSE,
    expense
  }
}

const _getCategories = categories => {
  return {
    type: GET_CATEGORIES,
    categories
  }
  
}

const _getExpenses = expenses => {
  return {
    type: GET_EXPENSES,
    expenses
  }
  
}

const deleteExpense = expense => {
  return {
    type: DELETE_EXPENSES,
    expenses
  }
}

const updateExpenses = expense =>{
  return {
    type: UPDATE_EXPENSE,
    expense
  }
}

//THUNKS
export const getExpenses = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get('/expenses');

      dispatch(_getExpenses(data));
    } catch (err) {
      console.log(err)
    }
  }
  }
export const getCategories = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get('http://192.168.1.2:8080/categories/');
      dispatch(_getCategories(data));
      console.log("this is the res from redux", data)
    } catch (err) {
      console.log(err)
    }
  }
  }



const initialState = [];

export default function(state = initialState, action) {
  switch(action.type){
    case GET_CATEGORIES:
    return action.categories
    case GET_EXPENSES:
      return state;
    case ADD_EXPENSE:
      return [...state, action.expense]
    default:
      return state;
  }
}