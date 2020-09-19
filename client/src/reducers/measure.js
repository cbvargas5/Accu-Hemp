import { UPDATE_MEASURE_STEPS, GET_PRODUCTS, SELECT_DOSE, SELECT_DEVICE, SELECT_BRAND, SELECT_PRODUCT, SELECT_SIZE, SELECT_PRODUCT_MG, UPDATE_INPUT_EMAIL } from '../constants/action-types'


const initialState = {
    products: [],
    step: 1,
    selectedDevice: '',
    selectedBrand: '',
    selectedProduct: '',
    selectedDose: 0,
    selectedSize: 0,
    selectedProductMg: 0,
    userEmail: ''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case UPDATE_MEASURE_STEPS:
            return {...state, ...payload }

        case GET_PRODUCTS:
            return {...state, products: [...payload] }

        case SELECT_DOSE:
            return {...state, ...payload }

        case SELECT_DEVICE:
            return {...state, ...payload }

        case SELECT_BRAND:
            return {...state, ...payload }

        case SELECT_PRODUCT:
            return {...state, ...payload }

        case SELECT_SIZE:
            return {...state, ...payload }

        case SELECT_PRODUCT_MG:
            return {...state, ...payload }

        case UPDATE_INPUT_EMAIL:
            return {...state, ...payload }

        default:
            return state
    }
}