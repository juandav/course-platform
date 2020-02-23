import { createAction } from 'redux-actions'
import {
  GET_COURSES,
  GET_COURSES_SUCCESS,
  GET_COURSES_ERROR,
  GET_COURSES_LOADING,
  SET_PAGE
} from './action-types'

export const fetchCourses = createAction(GET_COURSES)
export const fetchCoursesSuccess = createAction(GET_COURSES_SUCCESS, ({ response: { items: courses } }) => ({ courses }))
export const fetchCoursesError = createAction(GET_COURSES_ERROR)
export const fetchCoursesLoading = createAction(GET_COURSES_LOADING, payload => JSON.parse(payload))
export const setPage = createAction(SET_PAGE)
