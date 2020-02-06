import { createAction } from 'redux-actions'
import * as types from './action-types'

export const fetchCourses = createAction(types.GET_COURSES)
export const fetchCoursesSuccess = createAction(types.GET_COURSES_SUCCESS, ({ response: { items } }) => items)
export const fetchCoursesError = createAction(types.GET_COURSES_ERROR)
export const fetchCoursesLoading = createAction(types.GET_COURSES_LOADING, payload => JSON.parse(payload))
