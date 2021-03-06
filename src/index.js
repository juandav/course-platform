import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import initStore from './store/make-store'
import { Router } from './router'
import { GlobalStyle } from './assets/css/global.styles'

import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'

const store = initStore({})

ReactDOM.render(
  <>
    <GlobalStyle />
    <Provider store={store}>
      <Router />
    </Provider>
  </>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
