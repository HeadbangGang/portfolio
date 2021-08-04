/* eslint-disable max-len */
import React from 'react'
import profilePicture from '../../../media/profile-picture.jpeg'
import './about-tayden.less'

export default class AboutTayden extends React.Component {
    render () {
        return (
            <div className="about-tayden" id="home">
                <h2 className="about-tayden__header">
                    About Tayden Flitcroft
                </h2>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={ profilePicture } alt='' style={{ width: '250px', border: '1px solid black', borderRadius: '50%' }} />
                </div>
                <h3>Aspiring Information Technology Professional</h3>
                <h5>
                    I am a Software Engineer and technology enthusiast with over three years of professional computer hardware and software repair, as well as over a year of software development with a Fortune 500 company.
                    I am a previous undergraduate student of Collin College and graduated in 2018 with a certification in Audio Engineering.
                    I have familiarity with multiple technologies such as HTML, CSS (LESS and SASS), JavaScript, ReactJS, AngularJS, Node.js and Express.
                    I have also dabbled in other scripting languages such as Python, PowerShell and AppleScript.
                </h5>
            </div>
        )
    }
}