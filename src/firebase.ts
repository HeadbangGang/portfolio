import ReactGA from 'react-ga'
import {PAGE_NAME} from './helpers/constants'

export const initializeGA = () => {
    ReactGA.initialize('G-P2P3YXM4H5', {
        debug: process.env.NODE_ENV === 'development'
    })
}

export const logPage = () => ReactGA.pageview(PAGE_NAME[window.location.pathname])

export const logEvent = ({ eventName, eventData }) => ReactGA.event({
    category: eventName,
    action: eventData
})



