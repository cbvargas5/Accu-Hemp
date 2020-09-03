import { GET_CONDITIONS, UPDATE_SURVEY_STEPS, SELECT_CONDITION, INPUT_WEIGHT, SELECT_PROFESSIONAL_HELP, SELECT_DOSE, SELECT_OTHER_MEDICATION, SELECT_DOSE_DURATION, SELECT_IMPROVEMENT, INPUT_ELABORATE, VERIFY_SURVEY } from '../constants/action-types'
import axios from 'axios'

export const getConditionsForSurvey = () => (dispatch, getState) => {
    const { conditions } = getState().estimator
    conditions.length ?
        dispatch({ type: GET_CONDITIONS, payload: conditions }) :
        axios.get('/dosages/conditions')
        .then(({ data }) => dispatch({ type: GET_CONDITIONS, payload: data }))
        .catch(err => console.log('failed to get CONDITIONS. ERROR: ', err))
}

export const updateSurveySteps = (payload) => ({
    type: UPDATE_SURVEY_STEPS,
    payload
})

export const selectSurveyCondition = (payload) => ({
    type: SELECT_CONDITION,
    payload
})

export const inputWeight = (payload) => ({
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

export const selectDoseDuration = (payload) => ({
    type: SELECT_DOSE_DURATION,
    payload
})

export const selectImprovement = (payload) => ({
    type: SELECT_IMPROVEMENT,
    payload
})

export const inputElaborate = (payload) => ({
    type: INPUT_ELABORATE,
    payload
})

export const verifySurvey = (payload) => ({
    type: VERIFY_SURVEY,
    payload
})