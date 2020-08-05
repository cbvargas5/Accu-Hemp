import { GET_PRODUCTS, UPDATE_QUIZ_STEPS, SELECT_DOSE } from '../constants/action-types'

const initialState = {
    products: [],
    step: 1,
    selectedDose: '',
    selectedImportance: '',
    selectedQualities: '',
    results: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_PRODUCTS:
            return {...state, products: [...payload] }

        case UPDATE_QUIZ_STEPS:
            return {...state, ...payload }

        case SELECT_DOSE:
            return {...state, ...payload }

        default:
            return state
    }
}