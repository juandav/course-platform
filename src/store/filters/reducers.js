import { handleActions } from 'redux-actions'
import { GET_FILTERS_SUCCESS, GET_FILTERS_LOADING } from './action-types'
import { INITIAL_STATE } from './initial-state'

function getFiltersSuccess (state, { payload }) {
  return {
    ...state,
    ...payload
  }
}
function getFiltersLoading (state, { payload }) {
  return {
    ...state,
    loading: payload
  }
}

export default handleActions({
  [GET_FILTERS_SUCCESS]: getFiltersSuccess,
  [GET_FILTERS_LOADING]: getFiltersLoading
}, INITIAL_STATE)
