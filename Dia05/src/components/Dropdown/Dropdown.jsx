import React, { useState } from 'react'
import PropTypes from 'prop-types'

import styles from './dropdown.scss'

const Dropdown = ({ data, defaultText, multiSelect, handleOnChange }) => {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState([])

  const renderIcon = () =>
    data !== null ? (
      <i
        id="toggleIcon"
        className={open ? styles.icon_triangule_up : styles.icon_triangule_down}
        aria-hidden="true"
      />
    ) : (
      ''
    )

  const hide = ev => {
    ev.preventDefault()
    setOpen(false)
  }

  const toggle = () => {
    setOpen(!open)
  }

  const showPlaceholder = () => {
    const placeholder = selected?.length > 0 ? selected.join(', ') : defaultText
    return placeholder
  }

  const selectOption = option => {
    if (multiSelect) {
      setSelected(
        selected?.some(id => option.id === id)
          ? selected?.filter(id => option.id !== id)
          : [...selected, option.id]
      )
    } else {
      setSelected([option.id])
      toggle()
    }
    handleOnChange(selected)
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
            className={styles.checkbox}
            type="checkbox"
            onMouseDown={ev => {
              ev.preventDefault()
            }}
            onChange={() => {
              selectOption(option)
            }}
            checked={selected?.some(id => option.id === id)}
            key={`checkbox_${option.id}`}
            id={`checkbox_${option.id}`}
          />
        ) : (
          ''
        )}
        <button
          type="button"
          id={`label_${option.id}`}
          onClick={ev => {
            selectOption(option)
            ev.preventDefault()
          }}
          onMouseDown={ev => {
            ev.preventDefault()
          }}
          htmlFor={`checkbox_${option.id}`}
          className={styles.name}
        >
          {option.name}
        </button>
      </div>
    ))
  }

  return (
    <div className={styles.component} onBlur={hide}>
      <button type="button" tabIndex={0} onClick={toggle}>
        <input type="text" className={styles.input} placeholder={showPlaceholder()} readOnly />
        <div className={`${styles.button} ${styles.down}`}>{renderIcon()}</div>
      </button>
      <div className={`${styles.options} ${open ? styles.show : styles.hidden}`}>
        {getOptions(data)}
      </div>
    </div>
  )
}

Dropdown.defaultProps = {
  data: [],
  defaultText: 'input your text',
  multiSelect: false,
  handleOnChange: () => {},
}

Dropdown.propTypes = {
  data: PropTypes.array,
  defaultText: PropTypes.string,
  multiSelect: PropTypes.bool,
  handleOnChange: PropTypes.func,
}

export default Dropdown
