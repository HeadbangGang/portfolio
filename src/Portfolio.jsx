import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Worker } from '@react-pdf-viewer/core'
import AboutTayden from './shared/components/about-tayden/about-tayden'
import WorkHistory from './shared/components/work-history/work-history'
import PortfolioFooter from './shared/components/portfolio-footer/portfolio-footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './portfolio.less'
import Projects from './shared/components/projects/projects'
import Wrapper from './wrapper/wrapper'
import Resume from './shared/components/resume/resume'
import { Route, Switch } from 'react-router'



export const Portfolio = () => {
    const isSmallView = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
            <Wrapper isSmallView={ isSmallView }>
                <div className="portfolio-container__content-container">
                    <Switch>
                        <Route exact path='/'>
                            <AboutTayden />
                        </Route>
                        <Route exact path='/work-history'>
                            <WorkHistory />
                        </Route>
                        <Route exact path='/projects'>
                            <Projects isSmallView={ isSmallView } />
                        </Route>
                        <Route exact path='/resume'>
                            <Resume isSmallView={ isSmallView } />
                        </Route>
                    </Switch>
                </div>
            </Wrapper>
            <PortfolioFooter />
        </Worker>
    )
}

export default Portfolio