import React from 'react'
import HomepageHeader from './homepage-header'
import AboutMe from './about-me'
import Projects from './projects'
import ContactMe from './contact-me'
import './homepage.scss'

const Homepage = () => {

    React.useEffect(() => {
        console.log(process.env.CLIENT_ID)
        console.log(process.env.CLIENT_SECRET)
        console.log(process.env.API_URL)

        console.log('homepage', process.env.DOTENV_KEY)

    }, [])
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
