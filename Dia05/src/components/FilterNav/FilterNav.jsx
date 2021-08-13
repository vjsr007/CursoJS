import React from 'react'
import PropTypes from 'prop-types'

import CustomInput from '../CustomInput'
import Dropdown from '../Dropdown'
import Pager from '../Pager'
import CustomButton from '../CustomButton'

import styles from './filterNav.scss'
import { lans } from '../../constants/constants'
import CustomLabel from '../CustomLabel/CustomLabel'

const FilterNav = ({ totalResults, changeNews }) => (
  <div className={styles.component}>
    <div className={styles.header}>
      <label className={styles.title}>News API</label>
      <label className={styles.subtitle}>Use filters to get articles</label>
    </div>
    <div className={styles.form}>
      <CustomLabel label="Topic" />
      <CustomInput />
      <CustomLabel label="Sources" />
      <Dropdown options={lans} multiSelect />
      <CustomLabel label="Dates" />
      <Dropdown options={lans} />
      <CustomLabel label="Languages" />
      <Dropdown options={lans} />
      <CustomLabel label="Sort by" />
      <Dropdown options={lans} />
      <Pager numberOfItems={totalResults} onChange={changeNews} />
      <CustomButton />
    </div>
  </div>
)

FilterNav.defaultProps = {
  totalResults: 0,
  changeNews: () => {},
}

FilterNav.propTypes = {
  totalResults: PropTypes.number,
  changeNews: PropTypes.func,
}

export default FilterNav
