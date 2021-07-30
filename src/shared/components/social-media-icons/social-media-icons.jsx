import React from 'react'
import PropTypes from 'prop-types'
import facebook_logo from './images/facebook.webp'
import twitter_logo from './images/twitter.webp'
import linkedin_logo from './images/linkedin.webp'

export const socialMediaData = [
    {
        name: 'Facebook',
        img: facebook_logo,
        url: 'https://www.facebook.com/tayden.flitcroftgoodeill'
    },
    {
        name: 'Twitter',
        img: twitter_logo,
        url: 'https://twitter.com/taydenpaul'
    },
    {
        name: 'LinkedIn',
        img: linkedin_logo,
        url: 'https://www.linkedin.com/in/tayden-flitcroft-225013147/'
    }
]

export default function SocialMediaIcons (props) {
    const { className, parentClass } = props

    return (
        <span className={ parentClass }>
            { socialMediaData.map(data => {
                <a href={ data.url } target="_blank" rel="noreferrer"><img src={ data.img } alt={ data.alt ?? '' } className={ data.className ?? className } /></a>
            })}
        </span>
    )
}

SocialMediaIcons.propTypes = {
    className: PropTypes.string,
    parentClass: PropTypes.string
}