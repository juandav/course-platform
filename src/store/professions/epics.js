import { combineEpics } from 'redux-observable'
import { EpicFactory } from '../../factories/epic.factory'
import { GET_PROFESSIONS } from './action-types'
import {
  getProfessionsLoading,
  getProfessionsSuccess,
  getProfessionsError
} from './actions'

const getProfessionsEpic = EpicFactory(GET_PROFESSIONS, '/professions',
  [
    getProfessionsLoading,
    getProfessionsSuccess,
    getProfessionsError
  ]
)

export const professionsEpics = combineEpics(getProfessionsEpic)
