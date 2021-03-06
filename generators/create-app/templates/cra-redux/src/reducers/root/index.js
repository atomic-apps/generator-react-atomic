import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import sampleReducer from '../sampleApp/sampleReducer'

export default combineReducers({
  routing: routerReducer,
  sample: sampleReducer
})
