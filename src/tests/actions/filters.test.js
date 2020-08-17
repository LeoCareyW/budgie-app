import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters';

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
});

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('should generate the text filter of user input', () => {
  const action = setTextFilter('filter');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'filter'
  })
})

test('should generate the text filter of user input', () => {
  const action = setTextFilter('');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})

test('should generate an action setting the date', () => {
  const action = sortByDate(moment(0));
  expect(action).toEqual({
    type: 'SORT_DATE',
  })
})

test('should generate the amount filter', () => {
  const action = sortByAmount('200');
  expect(sortByAmount('200')).toEqual({ type: 'SORT_AMOUNT' })
})

