import React from 'react'
import ArticleContainer from '../ArticleContainer'
import CustomLoader, { loaders } from '../CustomLoader'

import styles from './mainContent.scss'

const MainContent = () => (
  <div className={styles.component}>
    <CustomLoader defaultLoader={loaders.cube} />
    <ArticleContainer />
  </div>
)

export default MainContent
