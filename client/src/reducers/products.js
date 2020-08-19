import { GET_PRODUCTS, UPDATE_QUIZ_STEPS, UPDATE_FILTERED_PRODUCTS, SELECT_DOSE, SELECT_IMPORTANCE, SELECT_QUALITY } from '../constants/action-types'

const initialState = {
    products: [],
    filteredProducts: [],
    step: 1,
    selectedDose: '',
    selectedImportance: '',
    selectedQualities: ''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_PRODUCTS:
            return {...state, products: [...payload] }

        case UPDATE_FILTERED_PRODUCTS:
            return {...state, filteredProducts: [...payload] }

        case UPDATE_QUIZ_STEPS:
            return {...state, ...payload }

        case SELECT_DOSE:
            return {...state, ...payload }

        case SELECT_IMPORTANCE:
            return {...state, ...payload }

        case SELECT_QUALITY:
            return {...state, ...payload }

        default:
            return state
    }
}