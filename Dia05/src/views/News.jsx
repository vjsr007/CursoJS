import React from 'react'

import FilterNav from '../components/FilterNav'
import MainContent from '../components/MainContent'
import styles from './news.scss'

const News = () => (
  <div className={styles.component}>
    <FilterNav />
    <MainContent />
  </div>
)

export default News
