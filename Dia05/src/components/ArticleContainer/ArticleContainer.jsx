import React from 'react'
import PropTypes from 'prop-types'

import Article from '../Article/Article'

import styles from './articleContainer.scss'

const ArticleContainer = ({ data }) => (
  <div className={styles.component}>
    {data?.articles?.map(article => (
      <Article item={article} />
    ))}
  </div>
)

ArticleContainer.defaultProps = {
  data: {},
}

ArticleContainer.propTypes = {
  data: PropTypes.object,
}

export default ArticleContainer
