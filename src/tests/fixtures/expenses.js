import moment from 'moment';


export default [{
  id: '1',
  description: 'Gum',
  note: '',
  amount: 200,
  createdAt: 0
}, {
  id: '2',
  description: 'Apple',
  note: '',
  amount: 300,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Shoes',
  note: '',
  amount: 7000,
  createdAt: moment(0).add(4, 'days').valueOf()
}];
