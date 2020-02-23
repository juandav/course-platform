import { createAction } from 'redux-actions'
import {
  GET_PROFESSIONS,
  GET_PROFESSIONS_LOADING,
  GET_PROFESSIONS_SUCCESS,
  GET_PROFESSIONS_ERROR,
  SELECT_PROFESSION
} from './action-types'

export const getProfessions = createAction(GET_PROFESSIONS)
export const getProfessionsLoading = createAction(GET_PROFESSIONS_LOADING, payload => JSON.parse(payload))
export const getProfessionsSuccess = createAction(GET_PROFESSIONS_SUCCESS, ({ response: { items } }) => ({ items }))
export const getProfessionsError = createAction(GET_PROFESSIONS_ERROR)
export const selectProfession = createAction(SELECT_PROFESSION)
