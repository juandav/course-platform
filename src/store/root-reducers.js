import { combineReducers } from 'redux'
import meta from './meta/reducers'
import courses from './courses/reducers'

export const rootReducer = combineReducers({ meta, courses })
