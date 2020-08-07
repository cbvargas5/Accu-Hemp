import { UPDATE_MEASURE_STEPS } from '../constants/action-types'
import axios from 'axios'


export const updateMeasureSteps = (payload) => ({
    type: UPDATE_MEASURE_STEPS,
    payload
})