import React from 'react'

import CustomInput from '../CustomInput'
import Dropdown from '../Dropdown'
import Pager from '../Pager'
import CustomButton from '../CustomButton'

import styles from './filterNav.scss'

const FilterNav = () => (
  <div className={styles.component}>
    <CustomInput />
    <Dropdown />
    <Pager />
    <CustomButton />
  </div>
)

export default FilterNav
