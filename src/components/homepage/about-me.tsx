import React, {useContext, useEffect, useRef, useState} from 'react'
import I18N from '../I18N/i18n'
import isVisible from '../../helpers/isVisible'
import {UIContext} from '../../providers/ui'
import {TECHNOLOGIES_LOGOS, TECHNOLOGIES_PER_ROW} from '../../helpers/helpers'
import {Icon} from '@iconify/react'

const AboutMe = () => {
    const aboutMeRef = useRef(null)

    const [animationStarted, setAnimationStarted] = useState<boolean>(false)
    const [animationCompleted, setAnimationCompleted] = useState<boolean>(false)

    const isAboutMeVisible = isVisible(aboutMeRef)

    const { isSmallView } = useContext(UIContext)

    useEffect(() => {
        aboutMeRef.current.addEventListener('animationstart', handleAnimationStart)
        aboutMeRef.current.addEventListener('animationend', handleAnimationEnd)
    }, [])

    const handleAnimationStart = () => setAnimationStarted(true)

    const handleAnimationEnd = () => {
        setAnimationCompleted(true)
        aboutMeRef.current.removeEventListener('animationstart', handleAnimationStart)
        aboutMeRef.current.removeEventListener('animationend', handleAnimationEnd)
    }

    const shouldShowAnimation = isAboutMeVisible || animationStarted
    const shouldDisplayContent = animationStarted && animationCompleted

    const aboutMeClassName = () => {
        if (shouldDisplayContent) return ''

        if (shouldShowAnimation) {
            return 'fade-in-3'
        }
        return 'hidden'
    }

    const topLogoClassName = () => {
        if (shouldDisplayContent) return ''

        if (shouldShowAnimation) {
            return 'roll-up-3'
        }
        return 'hidden'
    }

    const bottomLogoClassName = () => {
        if (shouldDisplayContent) return ''

        if (shouldShowAnimation) {
            return 'roll-down-3'
        }
        return 'hidden'
    }

    const renderLogosGroup1 = () => {
        const logos = []
        for (let i = 0; i < TECHNOLOGIES_PER_ROW; i++) {
            logos.push(TECHNOLOGIES_LOGOS[i])
        }
        return logos.map(logo => {
            return <Icon icon={ logo } width={ isSmallView ? 50 : 100 } key={ logo }/>
        })
    }

    const renderLogosGroup2 = () => {
        const logos = []
        for (let i = TECHNOLOGIES_PER_ROW; i < TECHNOLOGIES_LOGOS.length && logos.length < TECHNOLOGIES_PER_ROW; i++) {
            logos.push(TECHNOLOGIES_LOGOS[i])
        }
        return logos.map(logo => {
            return <Icon icon={ logo } width={ isSmallView ? 50 : 100 } key={ logo }/> })
    }

    return (
        <section id="about-me">
            <div className="content">
                <div className={ `${topLogoClassName()} logos` }>
                    { renderLogosGroup1() }
                </div>
                <div className={ aboutMeClassName() } ref={ aboutMeRef }>
                    <I18N name="homepage.aboutMe.header" markdown />
                    <I18N blockLevel name="homepage.aboutMe.aboutMe" />
                </div>
                <div className={`${bottomLogoClassName()} logos` }>
                    { renderLogosGroup2()}
                </div>
            </div>
        </section>
    )
}
export default AboutMe
