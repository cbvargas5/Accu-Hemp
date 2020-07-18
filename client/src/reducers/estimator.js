import { GET_DOSE } from '../constants/action-types'


const initialState = {

}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_DOSE:
            return {...state, ...payload }

        default:
            return state
    }
}