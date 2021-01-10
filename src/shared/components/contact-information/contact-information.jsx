import React from 'react'
import './contact-information.less'



export default class ContactInformation extends React.Component {
    render () {
        
        return (
        <div id="contact-information" className="contact-information-container">
            <div className="title">
                Contact Information
            </div>
            <div>
                <div className="contact-information-contents">
                taydengoodeill@gmail.com
                </div>
                <div className="contact-information-contents">
                    (503) 569-7894
                </div>
            </div>
        </div>
        )
    }
}