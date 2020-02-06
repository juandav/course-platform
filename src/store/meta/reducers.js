import { handleActions } from 'redux-actions'
import update from 'immutability-helper';
import * as types from './action-types'
import { INITIAL_STATE } from './initial-state'

const categorySectionReducer = (state, {
  payload
}) => {
  return update(state, { sections: {[payload]: {$set: !state.sections[payload] }} })
}

export default handleActions({
  [types.TOGGLE_CATEGORY_SECTION]: categorySectionReducer
}, INITIAL_STATE)
