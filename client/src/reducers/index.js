import { combineReducers } from 'redux'
import home from './home'
import estimator from './estimator'
import survey from './survey'
import products from './products'
import measure from './measure'
import addingProducts from './addingProducts'
import advertising from './advertising'
import feedback from './feedback'


const rootReducer = combineReducers({
    home,
    estimator,
    survey,
    products,
    measure,
    addingProducts,
    advertising,
    feedback
});

export default rootReducer