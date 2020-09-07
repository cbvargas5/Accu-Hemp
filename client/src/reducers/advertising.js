import { UPDATE_ADVERTISING_STEPS, UPDATE_INPUT_COMPANY_NAME_ADVERTISING, SELECT_INVOLVEMENT_ADVERTISING, UPDATE_INPUT_FIRST_NAME, UPDATE_INPUT_LAST_NAME, UPDATE_INPUT_EMAIL_ADVERTISING, UPDATE_INPUT_PHONE, UPDATE_INPUT_SHOP_WEBSITE, UPDATE_INPUT_QUALITY_LINK, SELECT_AFFILIATE_STATUS, UPDATE_AFFILIATE_APP_LINK, UPDATE_INPUT_BRAND_DESC } from '../constants/action-types'


const initialState = {
    step: 1
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case UPDATE_ADVERTISING_STEPS:
            return {...state, ...payload }

        case UPDATE_INPUT_COMPANY_NAME_ADVERTISING:
            return {...state, ...payload }

        case SELECT_INVOLVEMENT_ADVERTISING:
            return {...state, ...payload }

        case UPDATE_INPUT_FIRST_NAME:
            return {...state, ...payload }

        case UPDATE_INPUT_LAST_NAME:
            return {...state, ...payload }

        case UPDATE_INPUT_EMAIL_ADVERTISING:
            return {...state, ...payload }

        case UPDATE_INPUT_PHONE:
            return {...state, ...payload }

        case UPDATE_INPUT_SHOP_WEBSITE:
            return {...state, ...payload }

        case UPDATE_INPUT_QUALITY_LINK:
            return {...state, ...payload }

        case SELECT_AFFILIATE_STATUS:
            return {...state, ...payload }

        case UPDATE_AFFILIATE_APP_LINK:
            return {...state, ...payload }

        case UPDATE_INPUT_BRAND_DESC:
            return {...state, ...payload }

        default:
            return state
    }
}