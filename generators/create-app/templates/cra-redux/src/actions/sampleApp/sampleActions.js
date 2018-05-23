import {
  SAMPLE_ACTION
} from './constants'

export const sampleAction = () => {
  return dispatch => {
    dispatch({
      type: SAMPLE_ACTION
    })
  }
}
