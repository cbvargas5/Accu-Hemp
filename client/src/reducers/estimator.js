import { GET_CONDITIONS, UPDATE_STEPS } from '../constants/action-types'


const initialState = {
    step: 1,
    conditions: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_CONDITIONS:
            return {...state, conditions: [...payload] }

        case UPDATE_STEPS:
            return {...state, ...payload }

        default:
            return state
    }
}