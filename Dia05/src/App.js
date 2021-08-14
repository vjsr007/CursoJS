/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react'

import News from './views/News'
import styles from './App.scss'

const App = () => (
  <div className={styles.component}>
    <AuthenticatedTemplate>
      <News />
    </AuthenticatedTemplate>
    <UnauthenticatedTemplate>
      <p>No users are signed in!</p>
    </UnauthenticatedTemplate>
  </div>
)

export default App
