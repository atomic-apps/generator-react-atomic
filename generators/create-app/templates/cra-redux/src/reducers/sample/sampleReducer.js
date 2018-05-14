import {
  SAMPLE_ACTION
} from './constants';

const initialState = {
  sampleCount: 0
}

export default (state = initialState, action) => {
  switch (action.type) {

    case SAMPLE_ACTION:
      return {
        ...state,
        sampleCount: state.sampleCount + 1
      }

    default:
      return state
  }
}
