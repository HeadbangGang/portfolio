import React, {useContext, useEffect, useRef, useState} from 'react'
import I18N from '../I18N/i18n'
import isVisible from '../../helpers/isVisible'
import {UIContext} from '../../providers/ui'
import {TECHNOLOGIES_LOGOS, TECHNOLOGIES_PER_ROW} from '../../helpers/helpers'

const AboutMe = () => {
    const logoRef = useRef(null)
    const aboutMeRef = useRef(null)

    const [logoAnimationTriggered, setLogoAnimationTriggered] = useState(false)
    const [aboutMeAnimationTriggered, setAboutMeAnimationTriggered] = useState(false)

    const isLogoVisible = isVisible(logoRef)
    const isAboutMeVisible = isVisible(aboutMeRef)

    const { isSmallView } = useContext(UIContext)

    useEffect(() => {
        aboutMeRef.current.addEventListener('animationend', handleAboutMeListener)
        logoRef.current.addEventListener('animationend', handleLogoListener)
    }, [])

    const handleAboutMeListener = () => {
        setAboutMeAnimationTriggered(true)
        aboutMeRef.current.removeEventListener('animationend', handleAboutMeListener)
    }

    const handleLogoListener = () => {
        setLogoAnimationTriggered(true)
        logoRef.current.removeEventListener('animationend', handleLogoListener)
    }

    const aboutMeClassName = () => {
        if (aboutMeAnimationTriggered) return ''

        if (isAboutMeVisible) {
            return 'fade-in-3'
        }
        return 'hidden'
    }

    const topLogoClassName = () => {
        if (logoAnimationTriggered) return ''

        if (isLogoVisible) {
            return 'roll-up-3'
        }
        return 'hidden'
    }

    const bottomLogoClassName = () => {
        if (logoAnimationTriggered) return ''

        if (isLogoVisible) {
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
            return <span className="iconify" data-icon={ logo } data-width={ isSmallView ? 50 : 100 } key={ logo }></span>
        })
    }

    const renderLogosGroup2 = () => {
        const logos = []
        for (let i = TECHNOLOGIES_PER_ROW; i < TECHNOLOGIES_LOGOS.length && logos.length < TECHNOLOGIES_PER_ROW; i++) {
            logos.push(TECHNOLOGIES_LOGOS[i])
        }
        return logos.map(logo => {
            return <span className="iconify" data-icon={ logo } data-width={ isSmallView ? 50 : 100 } key={ logo }></span>
        })
    }

    return (
        <section id="about-me">
            <div className="content">
                <div className={ `${topLogoClassName()} logos` } ref={ logoRef }>
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
