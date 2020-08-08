import { UPDATE_MEASURE_STEPS, GET_PRODUCTS } from '../constants/action-types'


const initialState = {
    products: [],
    step: 1,
    selectedDevice: '',
    selectedBrand: '',
    selectedProduct: '',
    selectedDose: '',
    results: [],
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case UPDATE_MEASURE_STEPS:
            return {...state, ...payload }

        case GET_PRODUCTS:
            return {...state, products: [...payload] }

        default:
            return state
    }
}