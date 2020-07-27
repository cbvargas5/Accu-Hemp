import { GET_PRODUCTS } from '../constants/action-types'
import axios from 'axios'

export const getProducts = () => (dispatch, getState) => {
    return axios.get('/products')
        .then(({ data }) => dispatch({ type: GET_PRODUCTS, payload: data }))
        .catch(err => console.log('failed to get PRODUCTS. ERROR: ', err))
}