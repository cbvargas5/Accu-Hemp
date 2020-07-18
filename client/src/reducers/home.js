import { AGREE } from '../constants/action-types'


const initialState = {
    agreement: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case AGREE:
            return {...state, ...payload }

        default:
            return state
    }
}