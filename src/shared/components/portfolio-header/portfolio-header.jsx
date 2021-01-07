import React from 'react'
import PropTypes from 'prop-types'
import './portfolio-header.less'



export default class PortfolioHeader extends React.Component {
    render () {
        
        return (
        <div className="portfolio-header">
                <a className="resume-button" onClick={ () => console.log('Resume')} href="#contact-information">Resume</a>
            <h1>
                Tayden Flitcroft
            </h1>
            <div className="border"></div>
                <div className="navigation-buttons">
                 <a className="home" onClick={ () => console.log('Home')} href="NEED TO FILL IN FOR HOME">Home</a>
                 <a className="work-history" onClick={ () => console.log('Work History')} href="#work-history">Work History</a>
                    <a className="contact" onClick={ () => console.log('Contact')} href="#contact-information">Contact</a>
            </div>
        </div>
        )
    }
}

PortfolioHeader.propTypes = {
}
