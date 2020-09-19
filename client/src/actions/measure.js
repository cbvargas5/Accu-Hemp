import { UPDATE_MEASURE_STEPS, SELECT_DOSE, SELECT_DEVICE, SELECT_BRAND, SELECT_PRODUCT, GET_PRODUCTS, SELECT_SIZE, SELECT_PRODUCT_MG, UPDATE_INPUT_EMAIL } from '../constants/action-types'
import axios from 'axios'


export const getProductsForMeasure = () => (dispatch, getState) => {
    const { products } = getState().products
    products.length ?
        dispatch({ type: GET_PRODUCTS, payload: products }) :
        axios.get('/products')
        .then(({ data }) => dispatch({ type: GET_PRODUCTS, payload: data }))
        .catch(err => console.log('failed to get PRODUCTS. ERROR: ', err))
}

export const updateMeasureSteps = (payload) => ({
    type: UPDATE_MEASURE_STEPS,
    payload
})

export const selectDose = (payload) => ({
    type: SELECT_DOSE,
    payload
})

export const selectDevice = (payload) => ({
    type: SELECT_DEVICE,
    payload
})

export const selectBrand = (payload) => ({
    type: SELECT_BRAND,
    payload
})

export const selectProduct = (payload) => ({
    type: SELECT_PRODUCT,
    payload
})

export const selectSize = (payload) => ({
    type: SELECT_SIZE,
    payload
})

export const selectProductMg = (payload) => ({
    type: SELECT_PRODUCT_MG,
    payload
})

export const updateEmail = (payload) => ({
    type: UPDATE_INPUT_EMAIL,
    payload
})