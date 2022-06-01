import React, {useContext, useEffect, useRef, useState} from 'react'
import ReactMarkdown from 'react-markdown'
import isVisible from '../../helpers/isVisible'
import {UIContext} from '../../providers/ui'
import I18N from '../I18N/i18n'
import { Icon } from '@iconify/react'

interface Props {
    image?: string
    title: string
    description: string
    id: string
    demoUrl?: string
    projectUrl?:string
}

const ProjectsCard = ({ image, demoUrl, description, projectUrl, title, id }: Props) => {
    const projectsRef = useRef(null)

    const { isSmallView } = useContext(UIContext)

    const isProjectVisible = isVisible(projectsRef)

    const [animationStarted, setAnimationStarted] = useState<boolean>(false)
    const [animationCompleted, setAnimationCompleted] = useState<boolean>(false)
    const [cardFlipped, setCardFlipped] = useState<boolean>(false)

    useEffect(() => {
        projectsRef.current.addEventListener('animationstart', handleAnimationStart)
        projectsRef.current.addEventListener('animationend', handleAnimationEnd)
    }, [])

    const handleAnimationStart = () => setAnimationStarted(true)

    const handleAnimationEnd = () => {
        setAnimationCompleted(true)
        projectsRef.current.removeEventListener('animationstart', handleAnimationStart)
        projectsRef.current.removeEventListener('animationend', handleAnimationEnd)
    }

    const shouldShowAnimation = isProjectVisible || animationStarted
    const shouldDisplayContent = animationStarted && animationCompleted

    const className = () => {
        if (shouldDisplayContent) return ''

        if (shouldShowAnimation) {
            return 'animate'
        }
        return 'hidden'
    }

    const openUrl = (url) => window.open(url, 'blank')

    if (isSmallView) {
        return (
            <div className={ `projects__boundary ${className()}`} ref={ projectsRef }>
                <button id={ id } onClick={() => setCardFlipped(!cardFlipped)}  className={`projects__wrapper ${cardFlipped ? 'card-flipped' : ''}`}>
                    <div className="projects__wrapper__inner">
                        <div className="projects__image-wrapper">
                            <img src={ image } alt={ title } />
                            <h2 className="projects__content__title">{ title }</h2>
                            <Icon className="projects__content__arrow" icon="fluent:arrow-forward-16-regular" width={ 25 } />
                        </div>
                        <div className="projects__content">
                            <h2 className="projects__content__title">{ title }</h2>
                            <ReactMarkdown className='projects__content__description' linkTarget="_blank">{ description }</ReactMarkdown>
                            <Icon className="projects__content__arrow-back" icon="fluent:arrow-forward-16-regular" width={ 25 } />
                        </div>
                    </div>
                </button>
                <div className="projects__links">
                    { demoUrl &&
                        <button onClick={() => openUrl(demoUrl)}>
                            <I18N name="projects.demo" />
                        </button>}
                    { projectUrl &&
                        <button onClick={() => openUrl(projectUrl)}>
                            <I18N name="projects.repo" />
                        </button>}
                </div>
            </div>
        )
    }

    return (
        <div id={ id } className={`projects__wrapper ${className()}`} ref={ projectsRef }>
            <div className="projects__wrapper__inner">
                <div className="projects__image-wrapper">
                    <img src={ image } alt={ title } />
                </div>
                <div className="projects__content">
                    <h2 className="projects__content__title">{ title }</h2>
                    <ReactMarkdown className='projects__content__description' linkTarget="_blank">{ description }</ReactMarkdown>
                </div>
            </div>
        </div>
    )
}

export default ProjectsCard
