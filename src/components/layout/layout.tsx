import React, { useEffect } from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import {useLocation} from 'react-router'
import './layout.scss'

const Layout = ({ children }) => {
    const location = useLocation()

    useEffect(() => {
        if (!location.hash) window.scroll(0, 0)
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
