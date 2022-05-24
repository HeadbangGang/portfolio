import React from 'react'
import I18N from '../I18N/i18n'
import { useNavigate } from 'react-router'

const ContactMe = () => {
    const navigate = useNavigate()

    return (
        <section id="contact-me">
            <div className="content">
                <I18N blockLevel className="contact-me-disclaimer" name="homepage.contactMe.disclaimer" />
                <div>
                    <button onClick={() => navigate('/contact')}>Contact Me</button>
                </div>
            </div>
        </section>
    )
}

export default ContactMe
