import React from 'react'
import ContactInformation from '../contact-information/contact-information';
import './portfolio-footer.less'
import facebook_logo from './images/facebook.webp'
import twitter_logo from './images/twitter.webp'
import linkedin_logo from './images/linkedin.webp'



export default class PortfolioFooter extends React.Component {
    render () {
        return (
        <div className="portfolio-footer">
            <div>
            <ContactInformation />
            <div className="footer-contents">
            &#169;2020 by Tayden Flitcroft
            </div>
            </div>
            <a href="https://www.facebook.com/tayden.flitcroftgoodeill" target="_blank" rel="noreferrer"><img src={facebook_logo} alt='' className="social-media"/></a>
            <a href="https://twitter.com/taydenpaul" target="_blank" rel="noreferrer"><img src={twitter_logo} alt='' className="social-media"/></a>
            <a href="https://www.linkedin.com/in/tayden-flitcroft-225013147/" target="_blank" rel="noreferrer"><img src={linkedin_logo} alt='' className="social-media" /></a>
        </div>
        )
    }
}
