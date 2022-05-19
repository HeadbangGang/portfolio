import React from 'react'
import TypedWrapper from '../typed-wrapper/typed-wrapper'
import I18N from '../I18N/i18n'
import './homepage.scss'

const Homepage = () => {
    const scrollToProjects = () => document.getElementById('projects').scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'center'})

    const developmentExp = () => {
        const startDate = new Date('10/1/2020') as unknown as number
        const todaysData = new Date() as unknown as number
        const diffTime = Math.abs(startDate - todaysData)
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        return Math.ceil(diffDays / 365)
    }

    return (
        <div className="homepage">
            <section id="homepage-header">
                <I18N blockLevel className="hello roll-up-1" name="homepage.hello" />
                <I18N blockLevel className="my-name-is roll-up-2" name="homepage.myNameIs" />
                <div className="i-am-a-engineer roll-up-3">
                    <I18N name="homepage.iAmA" />
                    <TypedWrapper />
                </div>
                <I18N blockLevel className="subheader roll-up-4" name="homepage.subheader" years={ developmentExp() }/>
                <div className="view-projects-button roll-up-5">
                    <button onClick={ scrollToProjects }>
                        <I18N name="homepage.viewProjects" />
                    </button>
                </div>
            </section>
            <section id="about-me" style={{ height: '500px'}}>
                <div>About Me</div>
            </section>
            {/*<section id="projects" style={{ marginTop: '1000px'}}>*/}
            {/*    tayden*/}
            {/*</section>*/}
        </div>
    )
}

export default Homepage
