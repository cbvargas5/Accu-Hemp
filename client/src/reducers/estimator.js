import { GET_DOSE } from '../constants/action-types'


const initialState = {
    doses: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_DOSE:
            return {...state, doses: [...payload] }

        default:
            return state
    }
}