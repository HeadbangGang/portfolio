import React from 'react'
import SocialMediaIcons from '../social-media-icons/social-media-icons';
import './portfolio-footer.less'
export default class PortfolioFooter extends React.Component {
    render () {
        return (
        <div className="portfolio-footer">
            <div>
            <div id="contact-information" className="contact-information-container">
            <div className="title">
                Contact Information
            </div>
            <div>
                <div className="contact-information-contents">
                taydengoodeill@gmail.com
                </div>
                <div className="contact-information-contents">
                    (503) 569-7894
                </div>
            </div>
        </div>
                 <div className="footer-contents">
                 &#169;2020 by Tayden Flitcroft
                 </div>
            </div>
            <SocialMediaIcons className="social-media" />
        </div>
        )
    }
}
