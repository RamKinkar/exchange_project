import {compose, createStore, applyMiddleware} from 'redux'
// import {persistStore, autoRehydrate} from 'redux-persist'
// import rootReducer from './reducer'
// import reduxThunk from 'redux-thunk'
// import reduxLogger from 'redux-logger'
import rootReducer from './reducer'

const store = createStore(
  rootReducer,
  // compose(
  //   applyMiddleware(reduxThunk,reduxLogger),
  //   // autoRehydrate()
  // )
)

// begin periodically persisting the store
// persistStore(store)

export default store