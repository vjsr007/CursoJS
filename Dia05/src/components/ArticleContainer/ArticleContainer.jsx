/* eslint-disable react/no-array-index-key */
import React from 'react'
import PropTypes from 'prop-types'

import Article from '../Article/Article'

import styles from './articleContainer.scss'

const ArticleContainer = ({ data }) => (
  <div className={styles.component}>
    {data?.articles?.map((article, idx) => (
      <Article key={`article${idx}`} item={article} />
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
