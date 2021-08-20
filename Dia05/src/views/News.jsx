import React, { useState } from 'react'

import FilterNav from '../components/FilterNav'
import MainContent from '../components/MainContent'
import { changeNews } from '../services/newsService'
import styles from './news.scss'

const News = () => {
  const [articles, setArticles] = useState({})

  return (
    <div className={styles.component}>
      <FilterNav
        totalResults={articles?.totalResults ?? 0}
        changeNews={changeNews}
        setArticles={setArticles}
      />
      <MainContent data={articles} />
    </div>
  )
}

export default News
