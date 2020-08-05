import { GET_PRODUCTS, UPDATE_QUIZ_STEPS } from '../constants/action-types'
import axios from 'axios'

export const getProducts = () => (dispatch, getState) => {
    return axios.get('/products')
        .then(({ data }) => dispatch({ type: GET_PRODUCTS, payload: data }))
        .catch(err => console.log('failed to get PRODUCTS. ERROR: ', err))
}

export const updateQuizSteps = (payload) => ({
    type: UPDATE_QUIZ_STEPS,
    payload
})