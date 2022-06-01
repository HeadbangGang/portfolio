import React, {useContext, useEffect} from 'react'
import {PortfolioDataContext} from '../../providers/portfolio-data'
import {ProjectDataObject} from '../../interfaces'
import SuspenseLoader from '../suspense-loader/suspense-loader'
import './projects.scss'
import I18N from '../I18N/i18n'
import ProjectsCard from './project-card'
import {isEmpty} from '../../helpers/helpers'

const Projects = () => {
    const { projectData } = useContext(PortfolioDataContext)

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.slice(1))
            if (element) {
                const { top } = element.getBoundingClientRect()
                const location = window.scrollY + top - 80
                window.scrollTo({top: location, behavior: 'smooth'})
            }
            window.history.pushState('', document.title, window.location.pathname + window.location.search) // removes hash from url
        }
    }, [])

    const renderProjects = () => {
        return projectData.map((item: ProjectDataObject) => {
            let image
            if (!isEmpty(item?.image?.icon)) {
                const { name, fileType } = item.image.icon
                image = require(`/assets/media/${name}.${fileType}`)
            }
            return (
                <ProjectsCard { ...item } image={image} key={ item.title }/>
            )
        })
    }

    if (!projectData.length) return <SuspenseLoader />

    return (
        <div className="projects">
            <I18N className="roll-down-2" name="projects.header" markdown />
            <I18N className="roll-down-3" name="projects.subHeader" markdown/>
            { renderProjects() }
        </div>
    )
}
export default Projects
