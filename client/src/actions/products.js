import { GET_PRODUCTS, UPDATE_QUIZ_STEPS, SELECT_DOSE, SELECT_IMPORTANCE } from '../constants/action-types'
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

export const selectDose = (payload) => ({
    type: SELECT_DOSE,
    payload
})

export const selectImportance = (payload) => ({
    type: SELECT_IMPORTANCE,
    payload
})