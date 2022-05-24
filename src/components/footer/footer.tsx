import React from 'react'
import I18N from '../I18N/i18n'
import {SOCIAL_MEDIA_LOGOS, LOGO_URLS} from '../../helpers/helpers'
import { Icon } from '@iconify/react'
import './footer.scss'

const Footer = () => {
    const date = new Date()

    const renderIcons = SOCIAL_MEDIA_LOGOS.map(logo => (
        <a href={LOGO_URLS[logo]} key={ logo } rel="noreferrer" target="_blank">
            <Icon icon={`ion:${ logo }`} width="22" height="22" />
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
