import React from 'react'
import profilePicture from '../../media/profile-picture.jpeg'
import './about-tayden.less'

const AboutTayden = () => {
  return (
    <div className="about-tayden">
      <h1 className="about-tayden__header">
        About Me
      </h1>
      <div className="about-tayden__img-wrapper">
        <img src={ profilePicture } alt="tayden" />
      </div>
      <div className="about-tayden__content">
        <h2>Aspiring Information Technology Professional</h2>
        <h3>
          I am a Software Engineer and technology enthusiast with over three years of professional computer hardware and software repair, as well as over a year of software development with a Fortune 500 company.
          I am a previous undergraduate student of Collin College and graduated in 2018 with a certification in Audio Engineering.
          I have familiarity with multiple technologies such as HTML, CSS (LESS and SASS), JavaScript, React, Node and Express.
          I have also dabbled in other scripting languages such as Python, PowerShell and AppleScript.
        </h3>
      </div>
    </div>
  )
}

export default AboutTayden
