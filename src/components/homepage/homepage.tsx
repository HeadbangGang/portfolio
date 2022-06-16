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
            <div className="homepage__content">
                <AboutMe />
                <Projects />
                <ContactMe />
            </div>
        </div>
    )
}

export default Homepage
