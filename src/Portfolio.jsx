import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Worker } from '@react-pdf-viewer/core'
import AboutTayden from './components/about-tayden/about-tayden'
import WorkHistory from './components/work-history/work-history'
import PortfolioFooter from './components/portfolio-footer/portfolio-footer'
import './portfolio.less'
import Projects from './components/projects/projects'
import Wrapper from './components/wrapper/wrapper'
import Resume from './components/resume/resume'
import { Route, Switch } from 'react-router'

export const Portfolio = () => {
  const isSmallView = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
      <Wrapper isSmallView={ isSmallView }>
        <div className="portfolio-container">
          <Switch>
            <Route exact path="/">
              <AboutTayden />
            </Route>
            <Route exact path="/work-history">
              <WorkHistory />
            </Route>
            <Route exact path="/projects">
              <Projects isSmallView={ isSmallView } />
            </Route>
            <Route exact path="/resume">
              <Resume isSmallView={ isSmallView } />
            </Route>
          </Switch>
          <PortfolioFooter />
        </div>
      </Wrapper>
    </Worker>
  )
}

export default Portfolio
