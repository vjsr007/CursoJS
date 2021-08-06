import React from 'react'

import CustomInput from '../CustomInput'
import Dropdown from '../Dropdown'
import Pager from '../Pager'
import CustomButton from '../CustomButton'
import CustomInputClass from '../CustomInputClass/CustomInput'

import styles from './filterNav.scss'
import { lans } from '../../constants/constants'

const FilterNav = () => {
  const showConsole = ev => {
    console.log('text', ev.target.value)
  }

  const showConsole2 = ev => {
    console.log('text2', ev.target.value)
  }

  return (
    <div className={styles.component}>
      <CustomInput handleOnChange={showConsole} />
      <CustomInput handleOnChange={showConsole2} />
      <CustomInputClass />
      <Dropdown data={lans} />
      <Pager />
      <CustomButton />
    </div>
  )
}

export default FilterNav
