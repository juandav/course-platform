import { createAction } from 'redux-actions'
import {
  GET_FILTERS,
  GET_FILTERS_LOADING,
  GET_FILTERS_SUCCESS
} from './action-types'

export const getFilters = createAction(GET_FILTERS)
export const getFiltersLoading = createAction(GET_FILTERS_LOADING, payload => JSON.parse(payload))
export const getFiltersSuccess = createAction(GET_FILTERS_SUCCESS)
