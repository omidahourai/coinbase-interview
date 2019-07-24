import React from 'react'
import App from 'containers/App'
import GlobalStyles from 'styles/global'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import * as serviceWorker from './serviceWorker'

const store = configureStore({})

render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>,
  document.getElementById('root')
)
serviceWorker.unregister()
