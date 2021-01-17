import React from 'react'
import SocialMediaIcons from '../social-media-icons/social-media-icons'
import './portfolio-header.less'
export default class PortfolioHeader extends React.Component {
    render () {
        return (
        <div className="portfolio-header">

            <h1>
                Tayden Flitcroft
            </h1>
            <div className="nav-border"></div>
                <div className="navigation-buttons">
                 <a className="home" onClick={ () => console.log('Home')} href="#NEED-TO-FILL-IN-FOR-HOME">Home</a> 
                 <a className="resume-button" href="http://resume.taydenflitcroft.com/" target="_blank" rel="noreferrer">Resume</a>
                 <a className="work-history" onClick={ () => console.log('Work History')} href="#work-history">Work History</a>
                 <a className="contact" onClick={ () => console.log('Contact')} href="#contact-information">Contact Info</a>
            </div>
            <SocialMediaIcons 
                 className={'__social-media'}/>
        </div>
        )
    }
}