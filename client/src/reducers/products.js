import { GET_PRODUCTS } from '../constants/action-types'

const initialState = {
    products: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_PRODUCTS:
            return {...state, products: [...payload] }

        default:
            return state
    }
}