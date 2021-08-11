import React from 'react'
import PropTypes from 'prop-types'

import styles from './customButton.scss'

const CustomButton = ({ label }) => (
  <button type="button" className={styles.component}>
    <label>{label}</label>
  </button>
)

CustomButton.defaultProps = {
  label: 'Label',
}

CustomButton.propTypes = {
  label: PropTypes.string,
}

export default CustomButton
