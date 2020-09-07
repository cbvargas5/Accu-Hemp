import { UPDATE_ADVERTISING_STEPS, UPDATE_INPUT_COMPANY_NAME_ADVERTISING, SELECT_INVOLVEMENT_ADVERTISING, UPDATE_INPUT_FIRST_NAME, UPDATE_INPUT_LAST_NAME, UPDATE_INPUT_EMAIL_ADVERTISING, UPDATE_INPUT_PHONE, UPDATE_INPUT_SHOP_WEBSITE, UPDATE_INPUT_QUALITY_LINK, SELECT_AFFILIATE_STATUS, UPDATE_AFFILIATE_APP_LINK, UPDATE_INPUT_BRAND_DESC } from '../constants/action-types'


export const updateAdvertisingSteps = (payload) => ({
    type: UPDATE_ADVERTISING_STEPS,
    payload
})

export const updateInputCompanyName = (payload) => ({
    type: UPDATE_INPUT_COMPANY_NAME_ADVERTISING,
    payload
})

export const selectInvolvement = (payload) => ({
    type: SELECT_INVOLVEMENT_ADVERTISING,
    payload
})

export const updateInputFirstName = (payload) => ({
    type: UPDATE_INPUT_FIRST_NAME,
    payload
})

export const updateInputLastName = (payload) => ({
    type: UPDATE_INPUT_LAST_NAME,
    payload
})

export const updateInputEmail = (payload) => ({
    type: UPDATE_INPUT_EMAIL_ADVERTISING,
    payload
})

export const updateInputPhone = (payload) => ({
    type: UPDATE_INPUT_PHONE,
    payload
})

export const updateInputShopWebsite = (payload) => ({
    type: UPDATE_INPUT_SHOP_WEBSITE,
    payload
})

export const updateInputQualityLink = (payload) => ({
    type: UPDATE_INPUT_QUALITY_LINK,
    payload
})

export const selectAffiliateStatus = (payload) => ({
    type: SELECT_AFFILIATE_STATUS,
    payload
})

export const updateAffiliateLink = (payload) => ({
    type: UPDATE_AFFILIATE_APP_LINK,
    payload
})

export const updateInputBrandDesc = (payload) => ({
    type: UPDATE_INPUT_BRAND_DESC,
    payload
})