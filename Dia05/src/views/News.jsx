import React, { useEffect, useState } from 'react'

import FilterNav from '../components/FilterNav'
import MainContent from '../components/MainContent'
import { getNews } from '../services/newsService'
import styles from './news.scss'

const News = () => {
  const [articles, setArticles] = useState({})

  useEffect(() => {
    getNews({ query: 'q=*' }).then(data => setArticles(data))
  }, [])

  return (
    <div className={styles.component}>
      <FilterNav />
      <MainContent data={articles} />
    </div>
  )
}

export default News
