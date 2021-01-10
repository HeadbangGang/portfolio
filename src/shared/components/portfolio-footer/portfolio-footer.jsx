import React from 'react'
import ContactInformation from '../contact-information/contact-information';
import './portfolio-footer.less'



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
        </div>
        )
    }
}
