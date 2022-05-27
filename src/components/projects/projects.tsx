import React, {useContext, useEffect} from 'react'
import {isEmpty} from '../../helpers/helpers'
import {PortfolioDataContext} from '../../providers/portfolio-data'
import {NavigationContext} from '../../providers/navigation'
import SuspenseLoader from '../suspense-loader/suspense-loader'
import './projects.scss'

const Projects = () => {
    const { projectData } = useContext(PortfolioDataContext)
    const { setHasMounted } = useContext(NavigationContext)

    useEffect(() => {
        !projectData.length && setHasMounted(true)
    }, [projectData])

    if (isEmpty(projectData)) return <SuspenseLoader />

    return (
        <div className="projects">
            projects
        </div>
    )
}
export default Projects
