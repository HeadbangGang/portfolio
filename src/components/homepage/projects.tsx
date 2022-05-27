import React, {useContext} from 'react'
import I18N from '../I18N/i18n'
import { PortfolioDataContext } from '../../providers/portfolio-data'
import ProjectsCard from './projects-card'
import {ProjectDataObject} from '../../interfaces'

const Projects = () => {
    let { projectData } = useContext(PortfolioDataContext)

    projectData = projectData.filter(item => item.image)

    if (!projectData.length) return null

    const renderProjectCards = () => {
        return projectData.map((data: ProjectDataObject, idx: number) => {
            return <ProjectsCard { ...data } key={ idx }/>
        }
        )
    }

    return (
        <section id="projects">
            <I18N className="header" markdown name="homepage.projects.header" />
            <I18N className="subheader" markdown name="homepage.projects.subHeader" />
            <div className="project-card__container">
                { renderProjectCards() }
            </div>
        </section>
    )
}

export default Projects
