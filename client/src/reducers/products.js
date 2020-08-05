import { GET_PRODUCTS, UPDATE_QUIZ_STEPS } from '../constants/action-types'

const initialState = {
    products: [],
    step: 1,
    dose: '',
    importance: '',
    qualities: '',
    results: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_PRODUCTS:
            return {...state, products: [...payload] }

        case UPDATE_QUIZ_STEPS:
            return {...state, ...payload }

        default:
            return state
    }
}