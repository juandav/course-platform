import { combineEpics } from 'redux-observable'
import { EpicFactory } from '../../factories/epic.factory'
import { GET_COURSES } from './action-types'
import {
  fetchCoursesLoading,
  fetchCoursesSuccess,
  fetchCoursesError
} from './actions'

const fetchCourseEpic = EpicFactory(GET_COURSES, '/offerings',
  [
    fetchCoursesLoading,
    fetchCoursesSuccess,
    fetchCoursesError
  ]
)

export const courseEpics = combineEpics(fetchCourseEpic)
