// import {} from '../constants'
import { combineReducers } from 'redux'
import home from './home'
import estimator from './estimator'

const initialState = {
    agreement: false
}

const rootReducer = combineReducers({
    home,
    estimator,
});
// function rootReducer(state = initialState, action) {}

export default rootReducer