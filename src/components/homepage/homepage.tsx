import React from 'react'
import TypedWrapper from '../typed-wrapper/typed-wrapper'
import I18N, { language } from '../I18N/i18n'
import './homepage.scss'

const Homepage = () => {
    return (
        <div className="homepage">
            <div className="homepage__header">
                <I18N  name="homepage.header" myName={ language.common.name } />
                <div>
                    <TypedWrapper />
                </div>
            </div>
        </div>
    )
}

export default Homepage
