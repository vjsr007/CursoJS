import React from 'react'
import PropTypes from 'prop-types'

import styles from './customInput.scss'

const CustomInput = ({ handleOnChange, defaultTitle, defaultPlaceholder }) => (
  <input
    type="text"
    title={defaultTitle}
    placeholder={defaultPlaceholder}
    onChange={handleOnChange}
    className={styles.component}
  />
)

CustomInput.defaultProps = {
  handleOnChange: () => {},
  defaultTitle: 'input your text',
  defaultPlaceholder: 'input your text',
}

CustomInput.propTypes = {
  handleOnChange: PropTypes.func,
  defaultTitle: PropTypes.string,
  defaultPlaceholder: PropTypes.string,
}

export default CustomInput
