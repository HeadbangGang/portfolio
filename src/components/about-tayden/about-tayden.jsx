import React from 'react'
import profilePicture from '../../media/profile-picture.jpeg'
import * as styles from './about-tayden.less'

const AboutTayden = () => {
  return (
    <div className={ styles['about-tayden'] }>
      <h1 className={ styles['about-tayden__header'] }>
        About Tayden Flitcroft
      </h1>
      <div className={ styles['about-tayden__img-wrapper'] }>
        <img src={ profilePicture } alt="tayden" />
      </div>
      <div className={ styles['about-tayden__content'] }>
        <h2>Software Engineer</h2>
        <div>
          I am a Software Engineer and technology enthusiast with over four years of professional computer repair and software development experience with a Fortune 500 company.
          I graduated from Collin College located in Dallas, Texas in 2018 for Audio Engineering.
          I have familiarity with multiple technologies such as HTML, CSS (LESS and SASS), JavaScript, React, Redux, Node and Express.
        </div>
      </div>
    </div>
  )
}

export default AboutTayden
