import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { Worker } from '@react-pdf-viewer/core'
import AboutTayden from './components/about-tayden/about-tayden'
import WorkHistory from './components/work-history/work-history'
import PortfolioFooter from './components/portfolio-footer/portfolio-footer'
import Projects from './components/projects/projects'
import Wrapper from './components/wrapper/wrapper'
import Resume from './components/resume/resume'
import UIProvider from './providers/ui'
import './portfolio.less'

export const Portfolio = () => {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
      <UIProvider>
        <Wrapper>
          <Switch>
            <Route exact path="/" component={ AboutTayden } />
            <Route exact path="/work-history" component={ WorkHistory } />
            <Route exact path="/projects" component={ Projects } />
            <Route exact path="/resume" component={ Resume } />
            <Redirect to="/" />
          </Switch>
          <PortfolioFooter />
        </Wrapper>
      </UIProvider>
    </Worker>
  )
}

export default Portfolio
