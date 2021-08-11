/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import PropTypes from 'prop-types'

import styles from './article.scss'

const Article = ({ item }) => (
  <div className={styles.component}>
    <div className={styles.header}>
      <div className={styles.title}>{item.title}</div>
      <div className={styles.author}>{item.publishedAt}</div>
      <div className={styles.author}>{`By ${item?.author}` ?? ''}</div>
      <div className={styles.source}>{item?.source?.name ?? ''}</div>
    </div>
    <div className={styles.content}>
      <div className={styles.img_section}>
        <img className={styles.image} src={item.urlToImage} />
      </div>
      <div className={styles.article}>
        <div className={styles.text}>{item.description}</div>
        <a href={item.url} className={styles.text} target="_blank" rel="noreferrer">
          Go to article
        </a>
      </div>
    </div>
  </div>
)

Article.defaultProps = {
  item: {},
}

Article.propTypes = {
  item: PropTypes.object,
}

export default Article
