import React from 'react'
import I18N from '../I18N/i18n'
import './footer.scss'
import {SOCIAL_MEDIA_LOGOS, LOGO_URLS} from '../../helpers/helpers'

const Footer = () => {
    const date = new Date()

    const renderIcons = SOCIAL_MEDIA_LOGOS.map(logo => (
        <a href={LOGO_URLS[logo]} key={ logo } rel="noreferrer" target="_blank">
            <span className="iconify" data-icon={`ion:${ logo }`} data-width="22" data-height="22" />
        </a>
    ))

    return (
        <footer>
            <div className="credits">
                <I18N className="copyright" name="footer.credit" markdown />
                <I18N name="footer.copyright" year={ date.getFullYear() } markdown />
            </div>
            <div className="icons">
                { renderIcons }
            </div>
        </footer>
    )
}

export default Footer
