import { UPDATE_ADDING_PRODUCTS_STEPS, UPDATE_INPUT_COMPANY_NAME, SELECT_INVOLVEMENT, UPDATE_INPUT_EMAIL, UPDATE_INPUT_WEBSITE } from '../constants/action-types'

export const updateAddingProductsSteps = (payload) => ({
    type: UPDATE_ADDING_PRODUCTS_STEPS,
    payload
})

export const updateInputCompanyName = (payload) => ({
    type: UPDATE_INPUT_COMPANY_NAME,
    payload
})

export const selectInvolvement = (payload) => ({
    type: SELECT_INVOLVEMENT,
    payload
})

export const updateInputEmail = (payload) => ({
    type: UPDATE_INPUT_EMAIL,
    payload
})

export const updateInputWebsite = (payload) => ({
    type: UPDATE_INPUT_WEBSITE,
    payload
})