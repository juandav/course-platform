import { handleActions } from 'redux-actions'
import update from 'immutability-helper'
import { INITIAL_STATE } from './initial-state'
import * as types from './action-types'

const getCourseSuccess = (state, { payload }) => {
  const data = update(state.data, { $set: [...payload] })
  return ({
    ...state,
    data
  })
}
const getCourseError = (state, error) => ({ ...state, error })
const setCourseloading = (state, { payload: loading }) => ({ ...state, loading })

export default handleActions({
  [types.GET_PLAYLIST_SUCCESS]: getCourseSuccess,
  [types.GET_PLAYLIST_ERROR]: getCourseError,
  [types.GET_PLAYLIST_LOADING]: setCourseloading
}, INITIAL_STATE)
