import { GET_CONDITIONS, UPDATE_STEPS } from '../constants/action-types'
import axios from 'axios'

export const getConditions = () => (dispatch, getState) => {
    // const { items from state } = getState()
    return axios.get('/dosages/conditions')
        .then(({ data }) => dispatch({ type: GET_CONDITIONS, payload: data }))
        .catch(err => console.log('failed to get doses. ERROR-->', err))
}

export const updateSteps = (payload) => ({
    type: UPDATE_STEPS,
    payload
})