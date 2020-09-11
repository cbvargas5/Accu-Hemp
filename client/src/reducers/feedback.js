import { UPDATE_OVERALL_RATING, UPDATE_EASE_OF_USE_RATING, UPDATE_HELPFULNESS_RATING, UPDATE_INPUT_MOST_LIKE, UPDATE_INPUT_LEAST_LIKE, UPDATE_INPUT_SUGGESTIONS, UPDATE_INPUT_FEEDBACK_EMAIL } from '../constants/action-types'


const initialState = {
    overallRating: 0,
    easeOfUseRating: 0,
    helpfulnessRating: 0,
    inputMostLike: '',
    inputLeastLike: '',
    inputSuggestions: '',
    inputFeedbackEmail: '',
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case UPDATE_OVERALL_RATING:
            return {...state, ...payload }

        case UPDATE_EASE_OF_USE_RATING:
            return {...state, ...payload }

        case UPDATE_HELPFULNESS_RATING:
            return {...state, ...payload }

        case UPDATE_INPUT_MOST_LIKE:
            return {...state, ...payload }

        case UPDATE_INPUT_LEAST_LIKE:
            return {...state, ...payload }

        case UPDATE_INPUT_SUGGESTIONS:
            return {...state, ...payload }

        case UPDATE_INPUT_FEEDBACK_EMAIL:
            return {...state, ...payload }

        default:
            return state
    }
}