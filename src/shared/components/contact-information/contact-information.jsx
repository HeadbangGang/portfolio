import React from 'react'
import './contact-information.less'

const container = 'contact-information-contents'

export default class ContactInformation extends React.Component {
    render () {
        return (
        <div id="contact-information" className="contact-information-container">
            <div className="title">
                Contact Information
            </div>
            <div>
                <div className={container}>
                taydengoodeill@gmail.com
                </div>
                <div className={container}>
                    (503) 569-7894
                </div>
            </div>
        </div>
        )
    }
}
