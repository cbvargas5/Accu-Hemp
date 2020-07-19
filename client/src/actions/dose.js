import { GET_CONDITIONS } from '../constants/action-types'
import axios from 'axios'

export const getConditions = () => (dispatch, getState) => {
    // const { items from state } = getState()
    return axios.get('/dosages/conditions')
        .then(({ data }) => dispatch({ type: GET_CONDITIONS, payload: data }))
        .catch(err => console.log('failed to get doses. ERROR-->', err))
}