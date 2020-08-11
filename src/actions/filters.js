export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_DATE
export const sortByDate = () => ({
 type: 'SORT_DATE',
})

// SORT_AMOUNT
export const sortByAmount = () => ({
  type: 'SORT_AMOUNT',
})

// SET_START_DATE
export const setStartDate = (startDate = '') => ({
  type: 'SET_START_DATE',
  startDate
});

export const setEndDate = (endDate = '') => ({
  type: 'SET_END_DATE',
  endDate
});
