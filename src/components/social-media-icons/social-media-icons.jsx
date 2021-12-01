import React from 'react'
import PropTypes from 'prop-types'
import Facebook from '@material-ui/icons/Facebook'
import Twitter from '@material-ui/icons/Twitter'
import LinkedIn from '@material-ui/icons/LinkedIn'

export const socialMediaData = [
  {
    name: 'Facebook',
    iconComponent: <Facebook style={{ color: '#4267B2' }} />,
    url: 'https://www.facebook.com/tayden.flitcroftgoodeill'
  },
  {
    name: 'Twitter',
    iconComponent: <Twitter style={{ color: '#1DA1F2' }} />,
    url: 'https://twitter.com/taydenpaul'
  },
  {
    name: 'LinkedIn',
    iconComponent: <LinkedIn style={{ color: '#0e76a8' }} />,
    url: 'https://www.linkedin.com/in/tayden-flitcroft-225013147/'
  }
]

export default function SocialMediaIcons (props) {
  const { parentClass } = props

  return (
    <span className={ parentClass }>
      { socialMediaData.map(data => {
        <a href={ data.url } target="_blank" rel="noreferrer">{ data.iconComponent }</a>
      }) }
    </span>
  )
}

SocialMediaIcons.propTypes = {
  className: PropTypes.string,
  parentClass: PropTypes.string
}
