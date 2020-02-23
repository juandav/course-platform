import { combineReducers } from 'redux'
import meta from './meta/reducers'
import courses from './courses/reducers'
import locations from './locations/reducers'
import professions from './professions/reducers'
import filters from './filters/reducers'

export const rootReducer = combineReducers({
  meta,
  courses,
  locations,
  professions,
  filters
})
