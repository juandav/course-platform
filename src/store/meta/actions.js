import { 
  createAction 
} from 'redux-actions'
import * as types from './action-types'

export const toggleCategorySection = createAction(types.TOGGLE_CATEGORY_SECTION)
