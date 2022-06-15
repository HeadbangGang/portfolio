import React from 'react'
import I18N from '../I18N/i18n'
import TypedWrapper from '../typed-wrapper/typed-wrapper'
import { Icon } from '@iconify/react'
import { developmentExp, scrollToId } from '../../helpers/helpers'

const HomepageHeader = () => {
    return (
        <section id="homepage-header">
            <div className="background background-1"></div>
            <div className="background background-2"></div>
            <div className="background background-3"></div>
            <I18N blockLevel className="hello roll-up-1" name="homepage.hello" />
            <div className="name-wrapper roll-up-2">
                <I18N blockLevel name="homepage.myNameIs" />
                <I18N blockLevel name="common.name" />
            </div>
            <div className="i-am-a-engineer roll-up-3">
                <I18N name="homepage.iAmA" />
                <TypedWrapper />
            </div>
            <I18N blockLevel className="subheader roll-up-4" name="homepage.subheader" markdown years={ developmentExp() }/>
            <div className="view-projects-button roll-up-5">
                <button onClick={ () => scrollToId('projects') }>
                    <I18N name="homepage.viewProjects" />
                </button>
            </div>
            <button onClick={() => scrollToId('about-me')}>
                <Icon className="caret-icon" icon="fa-solid:caret-down" width="50" />
            </button>
        </section>
    )
}
export default HomepageHeader
