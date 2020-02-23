import { handleActions } from 'redux-actions'
import update from 'immutability-helper'
import { INITIAL_STATE } from './initial-state'
import * as types from './action-types'

function getCoursesSuccess (state, { payload }) {
  const data = (state.pageIndex !== 1)
    ? update(state.data, { $push: payload.courses })
    : update(state.data, { $set: [...payload.courses] })

  return {
    ...state,
    data
  }
}
const getCourseError = (state, error) => ({ ...state, error })
const setCourseloading = (state, { payload: loading }) => ({ ...state, loading })
const setPage = (state, { payload }) => ({ ...state, pageIndex: payload })

export default handleActions({
  [types.GET_COURSES_SUCCESS]: getCoursesSuccess,
  [types.GET_COURSES_ERROR]: getCourseError,
  [types.GET_COURSES_LOADING]: setCourseloading,
  [types.SET_PAGE]: setPage
}, INITIAL_STATE)
