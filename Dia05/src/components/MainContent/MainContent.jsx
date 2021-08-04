import React from 'react'
import ArticleContainer from '../ArticleContainer'
import CustomLoader from '../CustomLoader'

import styles from './mainContent.scss'

const MainContent = () => (
  <div className={styles.component}>
    <CustomLoader />
    <ArticleContainer />
  </div>
)

export default MainContent
