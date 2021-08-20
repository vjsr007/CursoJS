import React from 'react'
import PropTypes from 'prop-types'

import styles from './customButton.scss'

const CustomButton = ({ label, onClick }) => (
  <button type="button" onClick={onClick} className={styles.component}>
    <label>{label}</label>
  </button>
)

CustomButton.defaultProps = {
  label: 'Label',
  onClick: () => {},
}

CustomButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
}

export default CustomButton
