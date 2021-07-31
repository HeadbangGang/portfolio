import React, { useState } from 'react'
import AboutTayden from './shared/components/about-tayden/about-tayden'
import WorkHistory from './shared/components/work-history/work-history'
import PortfolioFooter from './shared/components/portfolio-footer/portfolio-footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './portfolio.less'
import Projects from './shared/components/projects/projects'
import Wrapper from './wrapper/wrapper'
import ResumeModal from './shared/components/resume-modal/resume-modal'
import { Route, Switch } from 'react-router'



export const Portfolio = () => {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <Wrapper setShowModal={ setShowModal }>
                <div className="portfolio-container__content-container">
                    <Switch>
                        <Route exact path='/'>
                            <AboutTayden />
                        </Route>
                        <Route exact path='/work-history'>
                            <WorkHistory />
                        </Route>
                        <Route exact path='/projects'>
                            <Projects />
                        </Route>
                    </Switch>
                </div>
            </Wrapper>
            <PortfolioFooter />
            <ResumeModal show={ showModal } onHide={ () => setShowModal(false) } />
        </>
    )
}

export default Portfolio