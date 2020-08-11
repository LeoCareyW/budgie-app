import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE

const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_DATE
const sortByDate = () => ({
 type: 'SORT_DATE',
})

// SORT_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_AMOUNT',
})

// SET_START_DATE
const setStartDate = (startDate = '') => ({
  type: 'SET_START_DATE',
  startDate
});

SET_END_DATE
const setEndDate = (endDate = '') => ({
  type: 'SET_END_DATE',
  endDate
});


const expensesReducerDefaultState = [];

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
      if (expense.id === action.id) {
        return {
          ...expense,
          ...action.updates
        };
      } else {
        return expense;
        }
      })
    default:
      return state;
    }
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
        return {
          ...state,
          text: action.text
        }
    case 'SORT_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SORT_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
})

// const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
// const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }));

// store.dispatch(removeExpense( { id: expenseOne.expense.id }))
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter(''));

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());

// store.dispatch(setEndDate(1250));


const demoState = {
  expenses: [{
    id: 'randomIdNumber',
    description: 'Dec Rent',
    note: 'This was for me rent n shit',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
};










