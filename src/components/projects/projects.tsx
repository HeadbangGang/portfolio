import React, {useContext, useEffect} from 'react'
import {isEmpty} from '../../helpers/helpers'
import {PortfolioDataContext} from '../../providers/portfolio-data'
import {NavigationContext} from '../../providers/navigation'
import SuspenseLoader from '../suspense-loader/suspense-loader'

const Projects = () => {
    const { projectData } = useContext(PortfolioDataContext)
    const { setHasMounted } = useContext(NavigationContext)

    useEffect(() => {
        setHasMounted(true)
    }, [projectData])

    if (isEmpty(projectData)) return <SuspenseLoader />

    return (
        <div>
            projects
        </div>
    )
}
export default Projects
