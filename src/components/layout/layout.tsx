import React, { useEffect } from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import {useLocation} from 'react-router'
import './layout.scss'

const Layout = ({ children }) => {
    const location = useLocation()

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.slice(1))
            if (element) {
                const { top } = element.getBoundingClientRect()
                const location = window.scrollY + top - 80
                window.scrollTo({top: location, behavior: 'smooth'})
            }
            window.history.pushState('', document.title, window.location.pathname + window.location.search) // removes hash from url
        } else {
            setTimeout(() => window.scroll(0, 0), 100)
        }
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
