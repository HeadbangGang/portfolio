import React from 'react'
import HomepageHeader from './homepage-header'
import AboutMe from './about-me'
import Projects from './projects'
import ContactMe from './contact-me'
import './homepage.scss'

const Homepage = () => {
    return (
        <div className="homepage">
            <HomepageHeader />
            <AboutMe />
            <Projects />
            <ContactMe />
        </div>
    )
}

export default Homepage
