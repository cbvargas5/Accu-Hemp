import { GET_CONDITIONS, UPDATE_STEPS, SELECT_CONDITION, GET_SEVERITIES, SELECT_SEVERITY, GET_DOSE, UPDATE_INPUT_EMAIL } from '../constants/action-types'


const initialState = {
    step: 1,
    conditions: [],
    severities: [],
    dose: [],
    selectedCondition: '',
    severityId: '',
    userEmail: ''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_CONDITIONS:
            return {...state, conditions: [...payload] }

        case GET_SEVERITIES:
            return {...state, severities: [...payload] }

        case GET_DOSE:
            return {...state, dose: [...payload] }

        case UPDATE_STEPS:
            return {...state, ...payload }

        case SELECT_CONDITION:
            return {...state, ...payload }

        case SELECT_SEVERITY:
            return {...state, ...payload }

        case UPDATE_INPUT_EMAIL:
            return {...state, ...payload }

        default:
            return state
    }
}