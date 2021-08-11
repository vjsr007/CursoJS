import React from 'react'
import PropTypes from 'prop-types'

import ArticleContainer from '../ArticleContainer'
import CustomLoader, { loaders } from '../CustomLoader'

import styles from './mainContent.scss'

const MainContent = ({ data }) => (
  <div className={styles.component}>
    {data?.articles ? (
      <ArticleContainer data={data} />
    ) : (
      <div className={styles.loader}>
        <CustomLoader defaultLoader={loaders.cube} />
      </div>
    )}
  </div>
)

MainContent.defaultProps = {
  data: {},
}

MainContent.propTypes = {
  data: PropTypes.object,
}

export default MainContent
