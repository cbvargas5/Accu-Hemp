import { GET_CONDITIONS, UPDATE_SURVEY_STEPS, SELECT_CONDITION, INPUT_WEIGHT, SELECT_PROFESSIONAL_HELP, SELECT_DOSE, SELECT_OTHER_MEDICATION, SELECT_DOSE_DURATION, SELECT_IMPROVEMENT, INPUT_ELABORATE, VERIFY_SURVEY } from '../constants/action-types'
import axios from 'axios'

export const getConditionsForSurvey = () => (dispatch, getState) => {
    const { conditions } = getState().dose
    products.length ?
        dispatch({ type: GET_CONDITIONS, payload: conditions }) :
        axios.get('/dosages/conditions')
        .then(({ data }) => dispatch({ type: GET_CONDITIONS, payload: data }))
        .catch(err => console.log('failed to get CONDITIONS. ERROR: ', err))
}