import React, { useState } from 'react'
import AboutTayden from './shared/components/about-tayden/about-tayden'
import WorkHistory from './shared/components/work-history/work-history'
import PortfolioFooter from './shared/components/portfolio-footer/portfolio-footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './portfolio.less'
import Projects from './shared/components/projects/projects'
import Wrapper from './wrapper/wrapper'



export const Portfolio = () => {

    const [showModal, setShowModal] = useState(false)

    return (
        <Wrapper>
            <div className="portfolio-container__content-container">
                <AboutTayden />
                <WorkHistory showModal={ showModal } setShowModal={ setShowModal } />
                <Projects />
            </div>
            <PortfolioFooter />
        </Wrapper>
    )
}

export default Portfolio