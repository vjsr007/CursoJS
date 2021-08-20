import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import CustomInput from '../CustomInput'
import Dropdown from '../Dropdown'
import Pager from '../Pager'
import CustomButton from '../CustomButton'

import styles from './filterNav.scss'
import { lans, dates, sort } from '../../constants/constants'
import CustomLabel from '../CustomLabel/CustomLabel'
import { getSources } from '../../services/newsService'

const FilterNav = ({ totalResults, changeNews, setArticles }) => {
  const [sources, setSources] = useState([])
  const [filters, setFilters] = useState({
    page: 1,
  })
  const [tempFilters, setTempfilters] = useState(filters)

  useEffect(() => {
    getSources().then(data => setSources(data.sources))
  }, [])

  const handleChangeNews = () => {
    changeNews(filters).then(data => setArticles(data))
  }

  useEffect(() => {
    handleChangeNews()
  }, [filters])

  const updateFilters = () => {
    setFilters({ ...filters, ...tempFilters })
  }

  const changePage = ({ page }) => {
    setFilters({ ...filters, page })
  }

  const changeTopic = event => {
    setTempfilters({ ...tempFilters, q: event.target.value })
  }

  const changeSources = selectedOptions => {
    setTempfilters({ ...tempFilters, sources: selectedOptions.map(option => option).join(',') })
  }

  return (
    <div className={styles.component}>
      <div className={styles.header}>
        <label className={styles.title}>News API</label>
        <label className={styles.subtitle}>Use filters to get articles</label>
      </div>
      <div className={styles.form}>
        <CustomLabel label="Topic" />
        <CustomInput onChange={changeTopic} />
        <CustomLabel label="Sources" />
        <Dropdown options={sources} multiSelect onChange={changeSources} />
        <CustomLabel label="Dates" />
        <Dropdown options={dates} />
        <CustomLabel label="Languages" />
        <Dropdown options={lans} />
        <CustomLabel label="Sort by" />
        <Dropdown options={sort} />
        <Pager numberOfItems={totalResults} onChange={changePage} />
        <CustomButton onClick={updateFilters} label="Search" />
      </div>
    </div>
  )
}

FilterNav.defaultProps = {
  totalResults: 0,
  changeNews: () => {},
  setArticles: () => {},
}

FilterNav.propTypes = {
  totalResults: PropTypes.number,
  changeNews: PropTypes.func,
  setArticles: PropTypes.func,
}

export default FilterNav
