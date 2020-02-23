import { combineEpics } from 'redux-observable'
import { EpicFactory } from '../../factories/epic.factory'
import { GET_LOCATIONS } from './action-types'
import {
  getLocationsLoading,
  getLocationsSuccess,
  getLocationsError
} from './actions'

const getLocationEpic = EpicFactory(GET_LOCATIONS, '/states',
  [
    getLocationsLoading,
    getLocationsSuccess,
    getLocationsError
  ]
)

export const locationEpics = combineEpics(getLocationEpic)
