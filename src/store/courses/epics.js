import { combineEpics } from 'redux-observable'
import { EpicFactory } from '../../factories/epic.factory'
import { GET_COURSES } from './action-types'
import {
  fetchCoursesLoading,
  fetchCoursesSuccess,
  fetchCoursesError,
  setPage
} from './actions'

const fetchCourseEpic = EpicFactory(GET_COURSES, '/offerings',
  [
    fetchCoursesLoading,
    fetchCoursesSuccess,
    fetchCoursesError
  ],
  payload => {
    const pageAction = (payload.type === 'more') ? setPage(payload.query.pageIndex + 1) : setPage(1)
    return [pageAction]
  }
)

export const courseEpics = combineEpics(fetchCourseEpic)
