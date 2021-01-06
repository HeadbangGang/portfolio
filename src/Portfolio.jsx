import React from 'react'
import PropTypes from 'prop-types'
import PortfolioHeader from './shared/components/portfolio-header/portfolio-header'
import ContactInformation from './shared/components/contact-information/contact-information'
import WorkHistory from './shared/components/work-history/work-history'
import AboutTayden from './shared/components/about-tayden/about-tayden'
import PortfolioFooter from './shared/components/portfolio-footer/portfolio-footer'



export default class Portfolio extends React.Component {
    render () {
        
        return (
        <div>
            <PortfolioHeader />
            <AboutTayden />
            <WorkHistory />
            <ContactInformation />
            <PortfolioFooter />
        </div>
        )
    }
}

Portfolio.propTypes = {
}
