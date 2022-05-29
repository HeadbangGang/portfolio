import React, { useEffect } from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import {useLocation} from 'react-router'
import './layout.scss'

const Layout = ({ children }) => {
    const location = useLocation()

    useEffect(() => {
        setTimeout(() =>{
            window.scroll(0, 0)
        }, 100)
    }, [])

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.slice(1))
            if (element) {
                element.scrollIntoView({behavior: 'smooth'})
            }
            window.history.pushState('', document.title, window.location.pathname + window.location.search) // removes hash from url
        } else {
            window.scroll(0,0)
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
