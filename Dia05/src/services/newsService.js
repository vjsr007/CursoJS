import { get } from '../Api'
import { NEWS_ENDPOINT } from '../constants/constants'

export const getNews = ({ query }) => {
  const url = NEWS_ENDPOINT.replace('{{QUERY_SEARCH}}', query)
  return get({ url })
}
