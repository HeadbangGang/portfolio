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
        return projectData.data.map((data: ProjectDataObject, idx: number) => {
            if (!data.image) return null
            // data.image = require(`/assets/media/${data.title.replaceAll(' ', '-').toLowerCase()}.png`)
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
