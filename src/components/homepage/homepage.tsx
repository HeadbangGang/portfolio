import React, {useContext, useEffect } from 'react'
import {NavigationContext} from '../../providers/navigation'
import HomepageHeader from './homepage-header'
import AboutMe from './about-me'
import Projects from './projects'
import ContactMe from './contact-me'
import {PortfolioDataContext} from '../../providers/portfolio-data'
import {isEmpty} from '../../helpers/helpers'
import SuspenseLoader from '../suspense-loader/suspense-loader'
import './homepage.scss'

const Homepage = () => {
    const { setHasMounted } = useContext(NavigationContext)
    const { projectData } = useContext(PortfolioDataContext)

    useEffect(() => {
        projectData.length && setHasMounted(true)
    }, [])

    if (!projectData.length) return <SuspenseLoader />

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
