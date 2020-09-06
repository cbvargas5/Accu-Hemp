import { UPDATE_ADDING_PRODUCTS_STEPS, UPDATE_INPUT_COMPANY_NAME, SELECT_INVOLVEMENT, UPDATE_INPUT_EMAIL, UPDATE_INPUT_WEBSITE } from '../constants/action-types'


const initialState = {
    step: 1,
    inputCompanyName: '',
    selectedInvolvement: '',
    inputEmail: '',
    inputWebsite: ''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case UPDATE_ADDING_PRODUCTS_STEPS:
            return {...state, ...payload }

        case UPDATE_INPUT_COMPANY_NAME:
            return {...state, ...payload }

        case SELECT_INVOLVEMENT:
            return {...state, ...payload }

        case UPDATE_INPUT_EMAIL:
            return {...state, ...payload }

        case UPDATE_INPUT_WEBSITE:
            return {...state, ...payload }

        default:
            return state
    }
}