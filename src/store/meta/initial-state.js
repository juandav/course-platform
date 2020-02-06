import { SECTIONS } from '../../constants/meta'

const getInitialSections = () => {
  var obj = {}
  SECTIONS.forEach(item => (obj[item] = false))
  return obj
}

export const INITIAL_STATE = {
  sections: getInitialSections()
}
