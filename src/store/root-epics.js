import { combineEpics } from 'redux-observable'
import { courseEpics } from './courses/epics'

export const rootEpic = combineEpics(
  courseEpics
)
