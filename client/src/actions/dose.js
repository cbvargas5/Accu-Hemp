import { GET_CONDITIONS, UPDATE_STEPS, SELECT_CONDITION, GET_SEVERITIES, SELECT_SEVERITY } from '../constants/action-types'
import axios from 'axios'

export const getConditions = () => (dispatch, getState) => {
    return axios.get('/dosages/conditions')
        .then(({ data }) => dispatch({ type: GET_CONDITIONS, payload: data }))
        .catch(err => console.log('failed to get conditions. ERROR-->', err))
}

export const getSeverities = () => (dispatch, getState) => {
    //may add console log
    const { estimator } = getState()
    return axios.get(`/dosages/${estimator.selectedCondition}`)
        .then(({ data }) => dispatch({ type: GET_SEVERITIES, payload: data }))
        .catch(err => console.log('failed to get severities. ERROR-->', err))
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