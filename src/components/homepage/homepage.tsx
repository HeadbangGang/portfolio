import React, {useContext, useEffect } from 'react'
import {NavigationContext} from '../../providers/navigation'
import HomepageHeader from './homepage-header'
import AboutMe from './about-me'
import Projects from './projects'
import './homepage.scss'
import ContactMe from './contact-me'

const Homepage = () => {
    const { setHasMounted } = useContext(NavigationContext)

    useEffect(() => {
        setHasMounted(true)
    }, [])

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
