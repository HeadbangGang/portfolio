import React from 'react'
import LandingVideo, {testTayden} from 'C:/Users/Tayden/Documents/Portfolio/portfolio/src/shared/components/landing-video/landing-video'
import PropTypes from 'prop-types'



export default class Portfolio extends React.Component {
    render () {
        
        return (
            <h1>
                <LandingVideo />
                hello
            { testTayden() }
            </h1>
        )
    }
}

Portfolio.propTypes = {
    testTayden: PropTypes.func
}
