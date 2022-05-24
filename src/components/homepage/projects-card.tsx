import React from 'react'
import {ProjectDataObject} from '../../interfaces'

interface Props extends ProjectDataObject {}

const ProjectsCard = ({ title, demoUrl, projectUrl, image }: Props) => {
    const openUrl = (url) => {
        window.open(url, 'blank')
    }

    return (
        <div className="project-card">
            <div className="project-card__image-wrapper">
                { image
                    ? <img src={ image } alt={ title } />
                    : <div>{ title }</div>
                }
                <div className="overlay">
                    <div className="project-card__buttons">
                        <div><button disabled={ !demoUrl } onClick={ () => openUrl(demoUrl) }>View Demo</button></div>
                        <div><button disabled={ !projectUrl } onClick={ () => openUrl(projectUrl) }>View Repo</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsCard
