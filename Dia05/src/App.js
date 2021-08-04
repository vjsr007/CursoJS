import React from 'react'

import News from "./views/News"
import styles from './App.scss'

const App = ({ name, lastName }) => (
    <div className={styles.component}>
      <News />
    </div>
  )

  export default App