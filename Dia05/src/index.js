import ReactDOM from 'react-dom'
import React from 'react'

// MSAL imports
import { PublicClientApplication, EventType } from '@azure/msal-browser'
import { MsalProvider } from '@azure/msal-react'

import { msalConfig } from './authConfig'

import App from './App'
import './styles/global.scss'

export const msalInstance = new PublicClientApplication(msalConfig)

const currentAccount = msalInstance.getActiveAccount()

const validAuth = async () => {
  if (!currentAccount) {
    msalInstance.handleRedirectPromise().then(() => msalInstance.loginRedirect())
  }
}

msalInstance.addEventCallback(event => {
  if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
    const { account } = event.payload
    msalInstance.setActiveAccount(account)
  }
})

validAuth()

ReactDOM.render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>
  </React.StrictMode>,
  document.getElementById('app')
)
