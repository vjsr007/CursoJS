/** Core components */
import { AuthenticationContext, adalGetToken } from 'react-adal'

/** Service */

let AuthContext

const adalService = (() => {
  /**
   * Add authorization header to the api service
   * @param {Object} api Api control caller
   * @param {Object} authContext Authorization context
   * @param {Object} adalSettings Adal settings
   */
  const addAuthorizationHeader = (api, authContext, adalSettings) => {
    if (window === window.parent) {
      if (!authContext.isCallback(window.location.hash)) {
        if (
          !authContext.getCachedToken(authContext.config.clientId) ||
          !authContext.getCachedUser()
        ) {
          authContext.login()
        }
      }
    }

    adalGetToken(authContext, adalSettings.endpoints[api]).then(token => {
      console.log(`Bearer ${token}`)
    })
  }

  /** Initialize adal service
   * @param {Object} settings Authentication settings
   * @param {Object} api Api caller service
   * @return {Object} Authorization context
   */
  const initialize = () => {
    const adalSettings = {
      tenant: 'bcf069b7-3819-4dbc-937c-dbc8cc1c7ffb',
      clientId: '3609e563-20b9-488d-9d5b-52821c6c58fa',
      redirectUri: window.location.origin,
      postLogoutRedirectUri: window.location.href,
      endpoints: {
        [window.location.href]: '3609e563-20b9-488d-9d5b-52821c6c58fa',
      },
      cacheLocation: 'localStorage',
    }

    console.log('adalSettings', adalSettings)

    AuthContext = new AuthenticationContext(adalSettings)

    AuthContext.handleWindowCallback()

    addAuthorizationHeader(window.location.href, AuthContext, adalSettings)

    return AuthContext
  }

  /** Get authorization context
   * @return {Object} Authorization context
   */
  const getAuthContext = () => {
    if (!AuthContext) {
      throw 'UI Settings not found'
    }
    return AuthContext
  }

  /** Logout */
  const logOut = () => {
    AuthContext.logOut()
  }

  return {
    initialize,
    getAuthContext,
    logOut,
  }
})()

export default adalService
