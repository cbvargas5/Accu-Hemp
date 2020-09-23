import {
    GET_CONDITIONS,
    GET_SEVERITIES,
    UPDATE_SURVEY_STEPS,
    UPDATE_OTHER_MEDICATION_INPUT,
    SELECT_CONDITION,
    SELECT_SEVERITY,
    INPUT_WEIGHT,
    SELECT_PROFESSIONAL_HELP,
    SELECT_DOSE,
    SELECT_OTHER_MEDICATION,
    SELECT_DOSE_DURATION,
    SELECT_IMPROVEMENT,
    INPUT_ELABORATE,
    VERIFY_SURVEY,
    UPDATE_VALIDATION_ERR
} from '../constants/action-types'
import axios from 'axios'

export const getConditionsForSurvey = () => (dispatch, getState) => {
    const { conditions } = getState().estimator
    conditions.length ?
        dispatch({ type: GET_CONDITIONS, payload: conditions }) :
        axios.get('/dosages/conditions')
        .then(({ data }) => dispatch({ type: GET_CONDITIONS, payload: data }))
        .catch(err => console.log('failed to get CONDITIONS. ERROR: ', err))
}

export const getSeveritiesForSurvey = () => (dispatch, getState) => {
    const { survey } = getState()
    return axios.get(`/dosages/${survey.selectedCondition}`)
        .then(({ data }) => dispatch({ type: GET_SEVERITIES, payload: data }))
        .catch(err => console.log('failed to get severities. ERROR: ', err))
}

export const updateSurveySteps = (payload) => ({
    type: UPDATE_SURVEY_STEPS,
    payload
})

export const selectSurveyCondition = (payload) => ({
    type: SELECT_CONDITION,
    payload
})

export const selectSurveySeverity = (payload) => ({
    type: SELECT_SEVERITY,
    payload
})

export const updateInputWeight = (payload) => ({
    type: INPUT_WEIGHT,
    payload
})

export const selectProfessionalHelp = (payload) => ({
    type: SELECT_PROFESSIONAL_HELP,
    payload
})

export const selectSurveyDose = (payload) => ({
    type: SELECT_DOSE,
    payload
})

export const selectOtherMedication = (payload) => ({
    type: SELECT_OTHER_MEDICATION,
    payload
})

export const updateOtherMedicationInput = (payload) => ({
    type: UPDATE_OTHER_MEDICATION_INPUT,
    payload
})

export const selectDoseDuration = (payload) => ({
    type: SELECT_DOSE_DURATION,
    payload
})

export const selectImprovement = (payload) => ({
    type: SELECT_IMPROVEMENT,
    payload
})

export const updateInputElaborate = (payload) => ({
    type: INPUT_ELABORATE,
    payload
})

export const verifySurvey = (payload) => ({
    type: VERIFY_SURVEY,
    payload
})

export const updateValidationError = (payload) => ({
    type: UPDATE_VALIDATION_ERR,
    payload
})