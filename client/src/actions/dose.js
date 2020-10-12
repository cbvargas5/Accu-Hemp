import { GET_CONDITIONS, UPDATE_STEPS, SELECT_CONDITION, GET_SEVERITIES, UPDATE_INPUT_EMAIL, SELECT_SEVERITY, GET_DOSE, UPDATE_VALIDATION_ERR } from '../constants/action-types'
import axios from 'axios'

export const getConditions = () => (dispatch, getState) => {
    return axios.get('/api/dosages/conditions')
        .then(({ data }) => dispatch({ type: GET_CONDITIONS, payload: data }))
        .catch(err => console.log('failed to get conditions. ERROR: ', err))
}

export const getSeverities = () => (dispatch, getState) => {
    const { estimator } = getState()
    return axios.get(`/api/dosages/${estimator.selectedCondition}`)
        .then(({ data }) => dispatch({ type: GET_SEVERITIES, payload: data }))
        .catch(err => console.log('failed to get severities. ERROR: ', err))
}

export const getDose = () => (dispatch, getState) => {
    const { estimator } = getState()
    return axios.get(`/api/dosages/dose/${estimator.severityId}`)
        .then(({ data }) => dispatch({ type: GET_DOSE, payload: data }))
        .catch(err => console.log('failed to get doses. ERROR: ', err))
}

export const updateSteps = (payload) => ({
    type: UPDATE_STEPS,
    payload
})

export const selectCondition = (payload) => ({
    type: SELECT_CONDITION,
    payload
})

export const selectSeverity = (payload) => ({
    type: SELECT_SEVERITY,
    payload
})

export const updateEmail = (payload) => ({
    type: UPDATE_INPUT_EMAIL,
    payload
})

export const updateValidationError = (payload) => ({
    type: UPDATE_VALIDATION_ERR,
    payload
})