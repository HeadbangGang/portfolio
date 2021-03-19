import React from 'react'
import PortfolioHeader from './shared/components/portfolio-header/portfolio-header'
import WorkHistory from './shared/components/work-history/work-history'
import AboutTayden from './shared/components/about-tayden/about-tayden'
import PortfolioFooter from './shared/components/portfolio-footer/portfolio-footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './portfolio.less'



export default class Portfolio extends React.Component {
    render () {
        return (
        <div className="portfolio-container">
        <div className="portfolio-container__border">
            <PortfolioHeader />
            <div className="portfolio-container__content-container">
            <AboutTayden />
            <WorkHistory />
            </div>
            <PortfolioFooter />
        </div>
        </div>
        )
    }
}