import { GET_PRODUCTS, UPDATE_QUIZ_STEPS, UPDATE_VALIDATION_ERR, UPDATE_FILTERED_PRODUCTS, SELECT_DOSE, SELECT_IMPORTANCE, SELECT_QUALITY } from '../constants/action-types'
import axios from 'axios'

export const getProducts = () => (dispatch, getState) => {
    return axios.get('/api/products')
        .then(({ data }) => dispatch({ type: GET_PRODUCTS, payload: data }))
        .catch(err => console.log('failed to get PRODUCTS. ERROR: ', err))
}

export const updateQuizSteps = (payload) => ({
    type: UPDATE_QUIZ_STEPS,
    payload
})

export const updateFilteredProducts = (payload) => ({
    type: UPDATE_FILTERED_PRODUCTS,
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

export const selectQuality = (payload) => ({
    type: SELECT_QUALITY,
    payload
})

export const updateValidationError = (payload) => ({
    type: UPDATE_VALIDATION_ERR,
    payload
})