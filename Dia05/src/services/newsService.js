import { get } from '../Api'
import { NEWS_ENDPOINT, SOURCES_ENDPOINT } from '../constants/constants'

export const getNews = ({ query }) => {
  const url = NEWS_ENDPOINT.replace('{{QUERY_SEARCH}}', query)
  return get({ url })
}

export const getSources = () => {
  const url = SOURCES_ENDPOINT
  return get({ url })
}

export const changeNews = ({ page = 1, q = '*', sources = '' }) => {
  const query = `q=${q}&page=${page}&sources=${sources}`
  return getNews({ query })
}
