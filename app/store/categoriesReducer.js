import axios from 'axios'

//ACTION TYPES
const GET_CATEGORIES = 'GET_CATEGORIES'
const GET_CATEGORY = 'GET_CATEGORY'

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

const _getCategory = category => {
  return {
    type: GET_CATEGORY,
    category
  }
  
}

const deleteExpense = expense => {
  return {
    type: DELETE_EXPENSES,
    expense
  }
}

const updateExpenses = expense =>{
  return {
    type: UPDATE_EXPENSE,
    expense
  }
}

//THUNKS
export const getCategory = (id) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`http://192.168.1.10:8080/categories/${id}`);
      dispatch(_getCategory(data));
    } catch (err) {
      console.log(err)
    }
  }
  }
export const getCategories = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get('http://192.168.1.10:8080/categories/');
      dispatch(_getCategories(data));
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
    case GET_CATEGORY:
      return action.category;
    case ADD_EXPENSE:
      return [...state, action.expense]
    default:
      return state;
  }
}