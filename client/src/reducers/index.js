import { combineReducers } from 'redux'
import home from './home'
import estimator from './estimator'
import products from './products'
import measure from './measure'


const rootReducer = combineReducers({
    home,
    estimator,
    products,
    measure
});

export default rootReducer