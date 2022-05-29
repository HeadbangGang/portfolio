import React, {useContext} from 'react'
import {PortfolioDataContext} from '../../providers/portfolio-data'
import {ProjectDataObject} from '../../interfaces'
import I18N from '../I18N/i18n'
import './projects.scss'
import SuspenseLoader from '../suspense-loader/suspense-loader'

const Projects = () => {
    const { projectData } = useContext(PortfolioDataContext)

    const renderProjects = () => {
        return projectData.map((item: ProjectDataObject) => {
            let image
            if (item.image) {
                image = require(`/assets/media/${item.image.name}.${item.image.fileType}`)
            }
            return ( <div key={item.title}>
                { image && <img src={ image } alt={ item.title } width={50}/> }
                <div>
                    {item.title}
                    <I18N name={ item.description } markdown target="_blank" />
                </div>
            </div>
            )
        })
    }

    if (!projectData.length) return <SuspenseLoader />

    return (
        <div className="projects">
            { renderProjects() }
        </div>
    )
}
export default Projects
