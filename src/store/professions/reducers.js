import { handleActions } from 'redux-actions'
import update from 'immutability-helper'
import { INITIAL_STATE } from './initial-state'
import {
  GET_PROFESSIONS_LOADING,
  GET_PROFESSIONS_SUCCESS,
  GET_PROFESSIONS_ERROR,
  SELECT_PROFESSION
} from './action-types'

const setProfessionsloading = (state, { payload: loading }) => ({ ...state, loading })
const getProfessionsError = (state, error) => ({ ...state, error })
const selectProfession = (state, { payload }) => ({ ...state, selected: payload })

function getProfessionsSuccess (state, { payload }) {
  const data = update(state.data, { $set: [...payload.items] })
  return {
    ...state,
    data
  }
}

export default handleActions({
  [GET_PROFESSIONS_LOADING]: setProfessionsloading,
  [GET_PROFESSIONS_SUCCESS]: getProfessionsSuccess,
  [GET_PROFESSIONS_ERROR]: getProfessionsError,
  [SELECT_PROFESSION]: selectProfession
}, INITIAL_STATE)
