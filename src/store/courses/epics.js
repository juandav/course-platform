import {
  combineEpics,
  ofType
} from 'redux-observable'
import {
  mergeMap,
  catchError,
  switchMap
} from 'rxjs/operators'
import { request } from 'universal-rxjs-ajax'
import { of, concat } from 'rxjs'
import * as types from './action-types'
import * as actions from './actions'
import { API_URL } from '../../constants/meta'

const getOptions = options => ({
  url: API_URL(options),
  method: 'GET'
})

const fetchCourseEpic = action$ => action$.pipe(
  ofType(types.GET_COURSES),
  switchMap(action => {
    const { payload } = action
    const options = getOptions(payload)

    const req = request(options)
      .pipe(
        mergeMap(
          resp => concat(
            of(actions.fetchCoursesLoading(false)),
            of(actions.fetchCoursesSuccess(resp))
          )
        ),
        catchError(
          error => concat(
            of(actions.fetchCoursesLoading(false)),
            of(actions.fetchCoursesError(error))
          )
        )
      )
    return concat(
      of(actions.fetchCoursesLoading(true)),
      req
    )
  })
)

export const courseEpics = combineEpics(fetchCourseEpic)
