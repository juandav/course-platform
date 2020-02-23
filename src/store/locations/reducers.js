import { handleActions } from 'redux-actions'
import update from 'immutability-helper'
import { INITIAL_STATE } from './initial-state'
import {
  GET_LOCATIONS_LOADING,
  GET_LOCATIONS_SUCCESS,
  GET_LOCATIONS_ERROR,
  SELECT_LOCATION
} from './action-types'

function getLocationsSuccess (state, { payload }) {
  const data = update(state.data, { $set: [...payload.items] })
  return {
    ...state,
    data
  }
}
const getLocationsError = (state, error) => ({ ...state, error })
const setLocationsloading = (state, { payload: loading }) => ({ ...state, loading })
const selectLocation = (state, { payload }) => ({ ...state, selected: payload })

export default handleActions({
  [GET_LOCATIONS_LOADING]: setLocationsloading,
  [GET_LOCATIONS_SUCCESS]: getLocationsSuccess,
  [GET_LOCATIONS_ERROR]: getLocationsError,
  [SELECT_LOCATION]: selectLocation
}, INITIAL_STATE)
