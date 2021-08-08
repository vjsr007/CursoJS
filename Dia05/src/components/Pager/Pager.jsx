/* eslint-disable default-case */
import React, { useState } from 'react'
import PropTypes from 'prop-types'

import styles from './pager.scss'

const Pager = ({ pageSize, numberOfItems }) => {
  const [page, setPage] = useState(1)

  const calculatePages = () => (numberOfItems > 0 ? Math.ceil(numberOfItems / pageSize) : 1)
  const goToFirst = () => {
    setPage(1)
  }
  const goToPrevious = () => {
    setPage(page > 1 ? page - 1 : page)
  }
  const goToNext = () => {
    setPage(page < calculatePages() ? page + 1 : page)
  }
  const goToLast = () => {
    setPage(calculatePages())
  }
  const goTo = where => {
    switch (where) {
      case 'first':
        goToFirst()
        break
      case 'previous':
        goToPrevious()
        break
      case 'next':
        goToNext()
        break
      case 'last':
        goToLast()
        break
    }
  }

  return (
    <div className={styles.component}>
      <div id="btnFirst" title="first" className={styles.button}>{`<<`}</div>
      <div id="btnPrevious" title="previous" className={styles.button}>{`<<`}</div>
      <div id="page" title="current page" className={`${styles.button} ${styles.input}`}>
        {page}
      </div>
      <div id="btnNext" title="next" className={styles.button}>{`>`}</div>
      <div id="btnLast" title="last" className={styles.button}>{`>>`}</div>
    </div>
  )
}

Pager.defaultProps = {
  pageSize: 20,
  numberOfItems: 0,
}

Pager.propTypes = {
  pageSize: PropTypes.number,
  numberOfItems: PropTypes.number,
}

export default Pager
