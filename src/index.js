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
