export const msalConfig = {
  auth: {
    clientId: '3609e563-20b9-488d-9d5b-52821c6c58fa',
    authority: 'https://login.microsoftonline.com/bcf069b7-3819-4dbc-937c-dbc8cc1c7ffb',
    redirectUri: window.location.origin,
    postLogoutRedirectUri: window.location.href,
  },
  cache: {
    sessionStorage: true,
  },
}

/*
///// TR
export const msalConfig = {
  auth: {
    clientId: '0c44b229-0eeb-4aca-ac59-6fbd975d24ff',
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
