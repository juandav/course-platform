import { combineEpics } from 'redux-observable'
import { courseEpics } from './courses/epics'
import { locationEpics } from './locations/epics'
import { professionsEpics } from './professions/epics'
import { filterEpics } from './filters/epics'

export const rootEpic = combineEpics(
  courseEpics,
  locationEpics,
  professionsEpics,
  filterEpics
)
