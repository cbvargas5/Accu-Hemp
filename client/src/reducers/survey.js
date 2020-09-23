import { GET_CONDITIONS, GET_SEVERITIES, UPDATE_SURVEY_STEPS, SELECT_CONDITION, SELECT_SEVERITY, INPUT_WEIGHT, SELECT_PROFESSIONAL_HELP, SELECT_DOSE, SELECT_OTHER_MEDICATION, UPDATE_OTHER_MEDICATION_INPUT, SELECT_DOSE_DURATION, SELECT_IMPROVEMENT, INPUT_ELABORATE, VERIFY_SURVEY, UPDATE_VALIDATION_ERR } from '../constants/action-types'


const initialState = {
    step: 1,
    conditions: [],
    severities: [],
    inputWeight: '',
    selectedDose: '',
    selectedCondition: '',
    selectedSeverity: '',
    selectedProfessionalHelp: '',
    selectedOtherMedication: '',
    otherMedicationInput: '',
    selectedDoseDuration: '',
    selectedImprovement: '',
    inputElaborate: '',
    selectedVerification: '',
    validationError: false
}
export default (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_CONDITIONS:
            return {...state, conditions: [...payload] }

        case GET_SEVERITIES:
            return {...state, severities: [...payload] }

        case UPDATE_SURVEY_STEPS:
            return {...state, ...payload }

        case INPUT_WEIGHT:
            return {...state, ...payload }

        case SELECT_DOSE:
            return {...state, ...payload }

        case SELECT_CONDITION:
            return {...state, ...payload }

        case SELECT_SEVERITY:
            return {...state, ...payload }

        case SELECT_PROFESSIONAL_HELP:
            return {...state, ...payload }

        case SELECT_OTHER_MEDICATION:
            return {...state, ...payload }

        case UPDATE_OTHER_MEDICATION_INPUT:
            return {...state, ...payload }

        case SELECT_DOSE_DURATION:
            return {...state, ...payload }

        case SELECT_IMPROVEMENT:
            return {...state, ...payload }

        case INPUT_ELABORATE:
            return {...state, ...payload }

        case VERIFY_SURVEY:
            return {...state, ...payload }

        case UPDATE_VALIDATION_ERR:
            return {...state, ...payload }

        default:
            return state
    }
}