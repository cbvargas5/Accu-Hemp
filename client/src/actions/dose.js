import { GET_DOSE } from '../constants/action-types'
import axios from 'axios'

export const getReviews = () => (dispatch, getState) => {
    // const { items from state } = getState()
    return axios.get('/dosages')
        .then(({ data }) => dispatch({ type: GET_DOSE, payload: data }))
        .catch(err => console.log('failed to get doses. ERROR-->', err))
}