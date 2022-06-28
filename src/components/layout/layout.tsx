import React, { useEffect } from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import {useLocation} from 'react-router'
import { EVENTS, PAGE_NAME } from '../../helpers/constants'
import './layout.scss'
import {logEvent} from '../../firebase'

const Layout = ({ children }) => {
    const location = useLocation()

    useEffect(() => {
        if (!location.hash) {
            window.scroll(0, 0)
        }
        logEvent(EVENTS.load_page, { pageName: PAGE_NAME[location.pathname] })
    }, [location])

    return (
        <div className="layout">
            <Navbar />
            <div id="main-content">
                { children }
                <Footer />
            </div>
        </div>
    )
}
export default Layout
