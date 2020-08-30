import { GET_CONDITIONS, UPDATE_SURVEY_STEPS, SELECT_CONDITION, INPUT_WEIGHT, SELECT_PROFESSIONAL_HELP, SELECT_DOSE, SELECT_OTHER_MEDICATION, SELECT_DOSE_DURATION, SELECT_IMPROVEMENT, INPUT_ELABORATE, VERIFY_SURVEY } from '../constants/action-types'


const initialState = {
    step: 1,
    conditions: [],
    inputWeight: '',
    selectedDose: '',
    selectedCondition: '',
    selectedProfessionalHelp: '',
    selectedOtherMedicication: '',
    selectedDoseDuration: '',
    selectedImprovement: '',
    inputElaborate: '',
    selectedVerification: '',
}
export default (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_CONDITIONS:
            return {...state, conditions: [...payload] }

        case UPDATE_SURVEY_STEPS:
            return {...state, ...payload }

        case INPUT_WEIGHT:
            return {...state, ...payload }

        case SELECT_DOSE:
            return {...state, ...payload }

        case SELECT_CONDITION:
            return {...state, ...payload }

        case SELECT_PROFESSIONAL_HELP:
            return {...state, ...payload }

        case SELECT_OTHER_MEDICATION:
            return {...state, ...payload }

        case SELECT_DOSE_DURATION:
            return {...state, ...payload }

        case SELECT_IMPROVEMENT:
            return {...state, ...payload }

        case INPUT_ELABORATE:
            return {...state, ...payload }

        case VERIFY_SURVEY:
            return {...state, ...payload }

        default:
            return state
    }
}