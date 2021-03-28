import React from 'react'
import PortfolioHeader from './shared/components/portfolio-header/portfolio-header'
import WorkHistory from './shared/components/work-history/work-history'
import AboutTayden from './shared/components/about-tayden/about-tayden'
import PortfolioFooter from './shared/components/portfolio-footer/portfolio-footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './portfolio.less'
import Projects from './shared/components/projects/projects'



export default class Portfolio extends React.Component {
    render () {
        return (
        <div className="portfolio-container">
            <PortfolioHeader />
            <div className="portfolio-container__content-container">
            <AboutTayden />
            <WorkHistory />
            <Projects />
            </div>
            <div style={{position: 'fixed', bottom: '0', width: '100%'}}>
            <PortfolioFooter />
            </div>
        </div>
        )
    }
}