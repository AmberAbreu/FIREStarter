import axios from 'axios'

//ACTION TYPES
const GET_CATEGORIES = 'GET_CATEGORIES'
const GET_CATEGORY = 'GET_CATEGORY'

const ADD_EXPENSE = 'ADD_EXPENSE'

const DELETE_EXPENSE = 'DELETE_EXPENSE'
const UPDATE_EXPENSE = 'UPDATE_EXPENSE'

//ACTION CREATORS

const _addExpense = expense => {
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

const _deleteExpense = expense => {
  return {
    type: DELETE_EXPENSE,
    expense
  }
}

const _updateExpense = expense =>{
  return {
    type: UPDATE_EXPENSE,
    expense
  }
}

//THUNKS
export const getCategory = (id) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`http://192.168.1.145:8080/categories/${id}`);
      dispatch(_getCategory(data));
    } catch (err) {
      console.log(err)
    }
  }
  }
export const getCategories = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get('http://192.168.1.145:8080/categories/');
      dispatch(_getCategories(data));
    } catch (err) {
      console.log(err)
    }
  }
  }

  export const deleteExpense = (id) => {
    return async (dispatch) => {
      try {
        const {data} = await axios.delete(`http://192.168.1.145:8080/categories/${id}`);
        dispatch(_deleteExpense(data));
      } catch (err) {
        console.log(err)
      }
    }
    }

    export const addExpense = (addedExpense, id) => {
      return async (dispatch) => {
        try {
          const {data} = await axios.post(`http://192.168.1.145:8080/categories/${id}`, addedExpense);
          dispatch(_addExpense(data));
        } catch (err) {
          console.log(err)
        }
      }
      }


export const updateExpense = (updatedExpense, id) => {
      return async (dispatch) => {
        try {
          const {data} = await axios.post(`http://192.168.1.145:8080/categories/${id}`, updatedExpense);
          dispatch(_updatedExpense(data));
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
      return Object.assign(state, action.expense)
    case DELETE_EXPENSE:
      return Object.assign(state, Object.keys(state).filter(category => category.id !== action.expense) )
      //return [...state.filter(expense => expense.id !== action.expense.id)]
    case UPDATE_EXPENSE:
      return Object.assign(state, Object.keys(state).map(expense => expense.id === action.expense.id ? action.expense : expense))
    default:
      return state;
  }
}