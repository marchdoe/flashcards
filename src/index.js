import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { injectGlobal } from 'styled-components'

import App from './components/App'

injectGlobal`
  * { box-sizing: border-box; }

  body {
    margin: 0;
    padding: 0;
  }
`

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))
