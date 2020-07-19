import { GET_CONDITIONS } from '../constants/action-types'


const initialState = {
    conditions: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_CONDITIONS:
            return {...state, conditions: [...payload] }

        default:
            return state
    }
}