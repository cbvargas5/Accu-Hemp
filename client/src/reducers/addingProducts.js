// import { AGREE } from '../constants/action-types'


const initialState = {
    step: 1,
    inputCompanyName: '',
    selectedInvolvement: '',
    inputEmail: '',
    inputWebsite: ''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case 'AGREE':
            return {...state, ...payload }

        default:
            return state
    }
}