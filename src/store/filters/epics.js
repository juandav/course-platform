import { forkJoin, of, concat } from 'rxjs'
import { combineEpics, ofType } from 'redux-observable'
import { switchMap, mergeMap } from 'rxjs/operators'
import { request } from 'universal-rxjs-ajax'
import { API_URL } from '../../constants/meta'
import { GET_FILTERS } from './action-types'
import { getFiltersSuccess, getFiltersLoading } from './actions'

const getFiltersEpic = action$ =>
  action$.pipe(
    ofType(GET_FILTERS),
    switchMap(({ payload }) => {
      const requestsObservable = payload
        .map(item =>
          request({
            method: 'GET',
            url: API_URL(item.path, item.query)
          }).pipe(
            mergeMap(({ response }) => of(response))
          ))

      const forkObservable = forkJoin(requestsObservable)
        .pipe(
          mergeMap(response => {
            const [courseTypes, deliveryMethods, subjectArea] = response

            return of(getFiltersSuccess({
              courseTypes,
              deliveryMethods,
              subjectArea,
              loading: false
            }))
          })
        )

      return concat(
        of(getFiltersLoading(true)),
        forkObservable
      )
    })
  )

export const filterEpics = combineEpics(getFiltersEpic)
