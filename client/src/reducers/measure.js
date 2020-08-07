import { UPDATE_MEASURE_STEPS } from '../constants/action-types'


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

        default:
            return state
    }
}