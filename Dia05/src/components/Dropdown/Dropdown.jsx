/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useState } from 'react'
import PropTypes from 'prop-types'

import styles from './dropdown.scss'

const Dropdown = ({ data, defaultText, multiSelect }) => {
  const [open, setOpen] = useState(false)

  const renderIcon = () =>
    data !== null ? <i id="toggleIcon" className="fa fa-sort-desc" aria-hidden="true" /> : ''

  const toggle = () => {
    setOpen(!open)
  }

  const getOptions = () => {
    if (!data) return ''
    return data.map(option => (
      <div
        title={option.name}
        id={`option_${option.id}`}
        key={`option_${option.id}`}
        className={styles.option}
      >
        {multiSelect ? (
          <input
            className={styles.checkBox}
            type="checkbox"
            key={`checkbox_${option.id}`}
            id={`checkbox_${option.id}`}
          />
        ) : (
          ''
        )}
        <label id={`label_${option.id}`} htmlFor={`checkbox_${option.id}`} className={styles.name}>
          {option.name}
        </label>
      </div>
    ))
  }

  return (
    <div tabIndex={0} onClick={toggle} className={styles.component}>
      <div className={styles.input} placeholder={defaultText} />
      <div className={`${styles.button} ${styles.down}`}>{renderIcon()}</div>
      {open && <div className={styles.options}>{getOptions(data)}</div>}
    </div>
  )
}

Dropdown.defaultProps = {
  data: [],
  defaultText: 'input your text',
  multiSelect: false,
}

Dropdown.propTypes = {
  data: PropTypes.array,
  defaultText: PropTypes.string,
  multiSelect: PropTypes.bool,
}

export default Dropdown
