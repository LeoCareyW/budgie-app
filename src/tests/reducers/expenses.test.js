import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([ ]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
};
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses);
});

// should add an expense

test('should add an expense to the expenses array', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      id: '4',
      description: 'Added',
      note: '',
      amount: 1,
      createdAt: 0
    }
}
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(
    [
    expenses[0],
    expenses[1],
    expenses[2],
    {"amount": 1, "createdAt": 0, "description": "Added", "id": "4", "note": ""}])
});

test('should edit an expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '1',
    updates: {
      description: 'Gum changed'
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state[0].description).toEqual('Gum changed')
})


test('should not edit an expense if id wrong', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '5',
    updates: {
      description: 'Gum changed'
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})


























