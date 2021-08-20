export const msalConfig = {
  auth: {
    clientId: '9c66e170-dac3-4676-962b-744abe1819a0',
    authority: 'https://login.microsoftonline.com/bcf069b7-3819-4dbc-937c-dbc8cc1c7ffb',
    redirectUri: window.location.origin,
    postLogoutRedirectUri: window.location.href,
  },
  cache: {
    localStorage: true,
  },
}

/*
export const msalConfig = {
  auth: {
    clientId: '43c1a3a5-305f-4d02-b140-f574d018854c',
    authority: 'https://login.microsoftonline.com/5b973f99-77df-4beb-b27d-aa0c70b8482c',
    redirectUri: window.location.origin,
    postLogoutRedirectUri: window.location.href,
  },
  cache: {
    sessionStorage: true,
  },
}
*/
export const loginRequest = {
  scopes: ['User.Read'],
}
