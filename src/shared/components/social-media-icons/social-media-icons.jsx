import React from 'react'
import PropTypes from 'prop-types'
import facebook_logo from './images/facebook.webp'
import twitter_logo from './images/twitter.webp'
import linkedin_logo from './images/linkedin.webp'

export const SocialMediaIcons = (props) => {
    SocialMediaIcons.propTypes = {
        alt: PropTypes.string,
        className: PropTypes.string,
        img: PropTypes.string,
        parentClass: PropTypes.string,
        url: PropTypes.string
    }
   
    const { alt, className, img, parentClass, url} = props

    return (
        <span className={ parentClass }>
            <a href="https://www.facebook.com/tayden.flitcroftgoodeill" target="_blank" rel="noreferrer"><img src={facebook_logo} alt='' className={ className } /></a>
            <a href="https://twitter.com/taydenpaul" target="_blank" rel="noreferrer"><img src={twitter_logo} alt='' className={ className } /></a>
            <a href="https://www.linkedin.com/in/tayden-flitcroft-225013147/" target="_blank" rel="noreferrer"><img src={linkedin_logo} alt='' className={ className } /></a>
            <a href={ url } target="_blank" rel="noreferrer"><img src={ img } alt={ alt } className={ className } /></a>
        </span>
    )
}

export default SocialMediaIcons