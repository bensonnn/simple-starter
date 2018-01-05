import { createStore, applyMiddleware } from 'redux'
import * as faceRedux from '@dollarshaveclub/face-redux/dist/index'

console.log(faceRedux.reducers.default);

import { scheduledCartRequestSent } from '@dollarshaveclub/face-redux/dist/actions/scheduledCart'

const store = createStore(
  faceRedux.reducers.default,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...faceRedux.middleware)
)

// store.subscribe(() => {
//   console.log(store.getState());
// })

const apiary ='https://private-2e403-newbusinessmodel.apiary-mock.com/api/red/v1'
const action = scheduledCartRequestSent(1)
action.payload.baseUrl = apiary


const promise = store.dispatch(action)
