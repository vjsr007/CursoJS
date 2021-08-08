import React from 'react'

import CustomInput from '../CustomInput'
import Dropdown from '../Dropdown'
import Pager from '../Pager'
import CustomButton from '../CustomButton'

import styles from './filterNav.scss'
import { lans } from '../../constants/constants'

const FilterNav = () => (
  <div className={styles.component}>
    <CustomInput />
    <CustomInput />
    <Dropdown options={lans} multiSelect />
    <Pager />
    <CustomButton />
  </div>
)

export default FilterNav
