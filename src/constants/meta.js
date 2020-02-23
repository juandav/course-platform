import { stringify } from 'query-string'

export const SECTIONS = ['one', 'two', 'three']
export const API_URL = (path, options) => {
  const URL = `https://api.courses.cebroker.com${path}`
  const params = stringify(options, { skipNull: true })

  return options ? `${URL}?${params}` : URL
}
