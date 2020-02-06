import { stringify }  from 'query-string'

export const SECTIONS = ["one", "two", "three"]
export const API_URL = options => {
  const URL = 'https://api.courses.test.cebroker.com/offerings'
  const params = stringify(options, { skipNull: true })

  return options ? `${URL}?${params}`: URL
}
