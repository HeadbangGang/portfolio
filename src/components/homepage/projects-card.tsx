import React, {useContext, useEffect, useRef, useState} from 'react'
import {ProjectDataObject} from '../../interfaces'
import {useNavigate} from 'react-router'
import isVisible from '../../helpers/isVisible'
import I18N from '../I18N/i18n'
import {UIContext} from '../../providers/ui'

interface Props extends ProjectDataObject {}

const ProjectsCard = ({ title, demoUrl, projectUrl, image }: Props) => {
    const projectCardRef = useRef(null)
    const navigate = useNavigate()

    const { isSmallView } = useContext(UIContext)

    const [animationStarted, setAnimationStarted] = useState<boolean>(false)
    const [animationCompleted, setAnimationCompleted] = useState<boolean>(false)

    const openUrl = (url) => {
        window.open(url, 'blank')
    }

    const navigateToProjects = () => {
        navigate('/projects')
        window.location.hash = title.replaceAll(' ', '-').toLowerCase()
    }

    if (!image) return null

    useEffect(() => {
        projectCardRef.current.addEventListener('animationstart', handleAnimationStart)
        projectCardRef.current.addEventListener('animationend', handleAnimationEnd)
    }, [])

    const handleAnimationStart = () => setAnimationStarted(true)

    const handleAnimationEnd = () => {
        setAnimationCompleted(true)
        projectCardRef.current.removeEventListener('animationstart', handleAnimationStart)
        projectCardRef.current.removeEventListener('animationend', handleAnimationEnd)
    }

    const isProjectCardVisible = isVisible(projectCardRef)

    const shouldShowAnimation = isProjectCardVisible || animationStarted
    const shouldDisplayContent = animationStarted && animationCompleted

    const projectCardClassname = () => {
        if (shouldDisplayContent) return ''

        if (shouldShowAnimation) {
            return 'animate-start'
        }
        return 'hidden'
    }

    return (
        <div className={`project-card ${projectCardClassname()}`} ref={ projectCardRef }>
            <div className="project-card__image-wrapper">
                { image
                    ? <img src={ image } alt={ title } />
                    : <div>{ title }</div>
                }
                <div className="overlay">
                    <div className="project-card__data-wrapper">
                        <div className="project-card__title">{ title }</div>
                        <div className="project-card__buttons">
                            <div><button disabled={ !demoUrl } onClick={ () => openUrl(demoUrl) }>
                                <I18N name="homepage.projects.viewDemo" />
                            </button></div>
                            <div><button disabled={ !projectUrl } onClick={ () => openUrl(projectUrl) }>
                                <I18N name={`homepage.projects.viewRepo${isSmallView ? 'SV' : ''}`} />
                            </button></div>
                            <div><button onClick={ navigateToProjects }>
                                <I18N name="homepage.projects.viewDetails" />
                            </button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsCard
