import React from 'react'
import SocialMediaIcons from '../social-media-icons/social-media-icons'
import './portfolio-footer.less'

export const PortfolioFooter = () => {
    return (
        <span className="footer-container">
            <SocialMediaIcons parentClass="social-media-footer" />
            <span>&#169;2020 by Tayden Flitcroft</span>
        </span>
    )
}

export default PortfolioFooter