import React, { useEffect, useState } from 'react'

import FilterNav from '../components/FilterNav'
import MainContent from '../components/MainContent'
import { getNews } from '../services/newsService'
import styles from './news.scss'

const News = () => {
  const [articles, setArticles] = useState({})

  const changeNews = ({ page }) => {
    let query = 'q=*'
    if (page) query = `q=*&page=${page}`
    getNews({ query }).then(data => setArticles(data))
  }

  useEffect(() => {
    changeNews({})
  }, [])

  return (
    <div className={styles.component}>
      <FilterNav totalResults={articles?.totalResults ?? 0} changeNews={changeNews} />
      <MainContent data={articles} />
    </div>
  )
}

export default News
