import React, {useContext} from 'react'
import I18N from '../I18N/i18n'
import { PortfolioDataContext } from '../../providers/portfolio-data'
import ProjectsCard from './projects-card'
import {ProjectDataObject} from '../../interfaces'
import {isEmpty} from '../../helpers/helpers'

const Projects = () => {
    let { projectData } = useContext(PortfolioDataContext)

    if (!projectData.length) return null

    const renderProjectCards = () => {
        return projectData.map((data: ProjectDataObject, idx: number) => {
            if (!data.image || isEmpty(data.image)) return null
            const image = require(`/assets/media/${ data.image.name }.${data.image.fileType}`)
            return <ProjectsCard { ...data } image={ image } key={ idx }/>
        })
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
