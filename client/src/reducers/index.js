import { combineReducers } from 'redux'
import home from './home'
import estimator from './estimator'
import survey from './survey'
import products from './products'
import measure from './measure'
import addingProducts from './addingProducts'


const rootReducer = combineReducers({
    home,
    estimator,
    survey,
    products,
    measure,
    addingProducts
});

export default rootReducer