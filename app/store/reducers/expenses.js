//ACTION TYPES
const ADD_EXPENSE = 'ADD_EXPENSE'
const GET_EXPENSES = 'GET_EXPENSES'
const DELETE_EXPENSES = 'DELETE_EXPENSE'
const UPDATE_EXPENSE = 'UPDATE_EXPENSE'

//ACTION CREATORS

const addExpense = expense => {
  return {
    type: ADD_EXPENSE,
    expense
  }
}

const getExpenses = expenses => {
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
export const getExpense = () => {
return async (dispatch) => {
  try {
    const {data} = await axios.get(`/api/expense`, 
  });
    dispatch(getExpenses(data));
  } catch (err) {
    console.log(err)
  }
}
}


const initialState = {}

export default (state = initialState, {type, payload}) => {
  switch(type){
    case GET_EXPENSES:
      return state;
    case ADD_EXPENSE:
      return [...state, action.expense]
    default:
      return state;
  }
}