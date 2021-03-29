import React from 'react'
import SocialMediaIcons from '../social-media-icons/social-media-icons';
import './portfolio-footer.less'
export default class PortfolioFooter extends React.Component {
    render () {
        return (
            <span className="footer-container">
                <SocialMediaIcons parentClass="social-media-footer"/>
                <span>&#169;2020 by Tayden Flitcroft</span>
            </span>
        )
    }
}
