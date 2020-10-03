import { GET_CONDITIONS, UPDATE_STEPS, SELECT_CONDITION, SELECT_CONDITION_ID, GET_SEVERITIES, SELECT_SEVERITY, GET_DOSE, UPDATE_INPUT_EMAIL, UPDATE_VALIDATION_ERR } from '../constants/action-types'


const initialState = {
    step: 1,
    conditions: [],
    severities: [],
    dose: [],
    selectedCondition: '',
    conditionId: '',
    severityId: '',
    userEmail: '',
    validationError: false
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

        case SELECT_CONDITION_ID:
            return {...state, ...payload }

        case SELECT_SEVERITY:
            return {...state, ...payload }

        case UPDATE_INPUT_EMAIL:
            return {...state, ...payload }

        case UPDATE_VALIDATION_ERR:
            return {...state, ...payload }

        default:
            return state
    }
}