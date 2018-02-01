import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

// Import Reducers
import {reducer as toastrReducer} from 'react-redux-toastr'
export default combineReducers({
  form: formReducer,
  toastr: toastrReducer
})