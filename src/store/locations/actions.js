import { createAction } from 'redux-actions'
import {
  GET_LOCATIONS,
  GET_LOCATIONS_LOADING,
  GET_LOCATIONS_SUCCESS,
  GET_LOCATIONS_ERROR,
  SELECT_LOCATION
} from './action-types'

export const getLocations = createAction(GET_LOCATIONS)
export const getLocationsLoading = createAction(GET_LOCATIONS_LOADING, payload => JSON.parse(payload))
export const getLocationsSuccess = createAction(GET_LOCATIONS_SUCCESS, ({ response: { items } }) => ({ items }))
export const getLocationsError = createAction(GET_LOCATIONS_ERROR)
export const selectLocation = createAction(SELECT_LOCATION)
