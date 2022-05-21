import React, {useContext, useEffect, useRef, useState} from 'react'
import I18N from '../I18N/i18n'
import isVisible from '../../helpers/isVisible'
import {UIContext} from '../../providers/ui'

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
            if (!isSmallView) return 'slide-right-2'
            return 'roll-down-3'
        }
        return 'hidden'
    }

    const logoClassName = () => {
        if (logoAnimationTriggered) return ''

        if (isLogoVisible) {
            if (!isSmallView) return 'slide-left-2'
            return 'roll-up-3'
        }
        return 'hidden'
    }

    return (
        <section id="about-me">
            <div className="content">
                <div className={ aboutMeClassName() } ref={ aboutMeRef }>
                    <I18N name="homepage.aboutMe.header" markdown />
                    <I18N blockLevel name="homepage.aboutMe.aboutMe" />
                </div>
                <div className={ logoClassName() } ref={ logoRef }>
                    <span className="iconify spinning-10" data-icon="logos:react" data-width={ isSmallView ? 150 : 300}></span>
                </div>
            </div>
        </section>
    )
}
export default AboutMe
