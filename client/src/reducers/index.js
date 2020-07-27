import { combineReducers } from 'redux'
import home from './home'
import estimator from './estimator'
import products from './products'


const rootReducer = combineReducers({
    home,
    estimator,
    products,

});

export default rootReducer