import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Portfolio from './Portfolio'

ReactDOM.render(
  <Router basename="/">
    <Portfolio />
  </Router>,
  document.getElementById('root')
)

if (process.env.NODE_ENV !== 'development') {
  ['/__/firebase/8.8.1/firebase-app.js', '/__/firebase/init.js']
    .forEach(script => {
      const newScript = document.createElement('script')
      newScript.setAttribute('src', script)
      document.getElementsByTagName('body')[0].appendChild(newScript)
    })
}
