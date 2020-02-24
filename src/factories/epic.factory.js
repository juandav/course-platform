import { merge, of, concat } from 'rxjs'
import { ofType } from 'redux-observable'
import {
  switchMap,
  catchError,
  mergeMap,
  debounceTime,
  takeUntil
} from 'rxjs/operators'
import { request } from 'universal-rxjs-ajax'
import { API_URL } from '../constants/meta'

/**
 * Epics factory for request. (only GET method)
 * @param {String} type TYPE
 * @param {String} path /offering
 * @param {Object} actions [ loading, success, error ]
 * @param {Function} triggers payload => [ otherActionOne, otherActionTwo, OtherActionN, .......]
 * @param {Array} blockers [........]
 * @param {Number} delay 1500
 */
export const EpicFactory = (
  type,
  path,
  actions,
  triggers,
  blockers = [],
  delay = 1500
) => action$ => {
  const [loading, success, error] = actions
  const interrupts = merge(...blockers)

  return action$.pipe(
    ofType(type),
    debounceTime(delay),
    switchMap(({ payload }) => concat(
      of(loading(true)),
      request({
        method: 'GET',
        url: API_URL(path, payload.query)
      })
        .pipe(
          takeUntil(interrupts),
          mergeMap(response => of(
            loading(false),
            ...(typeof triggers === 'function' ? triggers(payload) : []),
            success(response)
          )),
          catchError(err => of(
            loading(false),
            error(err)
          ))
        )
    ))
  )
}
