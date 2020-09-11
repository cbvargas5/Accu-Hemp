import { UPDATE_OVERALL_RATING, UPDATE_EASE_OF_USE_RATING, UPDATE_HELPFULNESS_RATING, UPDATE_INPUT_MOST_LIKE, UPDATE_INPUT_LEAST_LIKE, UPDATE_INPUT_SUGGESTIONS, UPDATE_INPUT_FEEDBACK_EMAIL } from '../constants/action-types'

export const updateOverallRating = (payload) => ({
    type: UPDATE_OVERALL_RATING,
    payload
})

export const updateEaseOfUseRating = (payload) => ({
    type: UPDATE_EASE_OF_USE_RATING,
    payload
})

export const updateHelpfulness = (payload) => ({
    type: UPDATE_HELPFULNESS_RATING,
    payload
})

export const updateInputMostLike = (payload) => ({
    type: UPDATE_INPUT_MOST_LIKE,
    payload
})

export const updateInputLeastLike = (payload) => ({
    type: UPDATE_INPUT_LEAST_LIKE,
    payload
})

export const updateInputSuggestions = (payload) => ({
    type: UPDATE_INPUT_SUGGESTIONS,
    payload
})

export const updateInputFeedbackEmail = (payload) => ({
    type: UPDATE_INPUT_FEEDBACK_EMAIL,
    payload
})