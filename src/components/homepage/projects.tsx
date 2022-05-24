import React, {useContext} from 'react'
import I18N from '../I18N/i18n'
import {isEmpty} from '../../helpers/helpers'
import { PortfolioDataContext } from '../../providers/portfolio-data'
import ProjectsCard from './projects-card'
import {ProjectDataObject} from '../../interfaces'

const Projects = () => {
    const { projectData } = useContext(PortfolioDataContext)

    if (isEmpty(projectData)) return null

    const renderProjectCards = () => {
        return projectData.data.map((data: ProjectDataObject, idx: number) => (
            <ProjectsCard { ...data } key={ idx }/>
        ))
    }

    return (
        <section id="projects">
            <I18N className="header" markdown name="homepage.projects.header" />
            <div className="project-card__container">
                { renderProjectCards() }
            </div>
        </section>
    )
}

export default Projects
