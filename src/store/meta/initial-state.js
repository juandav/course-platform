import { SECTIONS } from '../../constants/meta'

const getInitialSections = () => {
  let obj = {}
  SECTIONS.forEach(item => obj[item] = false)
  return obj
}

export const INITIAL_STATE = {
  sections: getInitialSections()
}
