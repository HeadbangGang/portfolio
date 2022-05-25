import React, {useContext, useEffect} from 'react'
import { NavigationContext } from '../../providers/navigation'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import {PortfolioDataContext} from '../../providers/portfolio-data'
import {useLocation} from 'react-router'
import './layout.scss'

const Layout = ({ children }) => {
    const location = useLocation()
    const { hasMounted } = useContext(NavigationContext)
    const { fetchProjectData } = useContext(PortfolioDataContext)

    useEffect(() => {
        setTimeout(() =>{
            window.scrollTo(0, 0)
        }, 100)
        fetchProjectData()
    }, [])

    useEffect(() => {
        console.log(location.hash)
        if (location.hash) {
            const element = document.getElementById(location.hash.slice(1))
            if (element) {
                element.scrollIntoView({behavior: 'smooth'})
            }
            window.history.pushState('', document.title, window.location.pathname + window.location.search) // removes hash from url
        } else {
            window.scrollTo({top:0,left:0, behavior: 'smooth'})
        }
    }, [location])

    return (
        <div className="layout">
            <Navbar />
            <div id="main-content">
                { children }
            </div>
            { hasMounted && <Footer /> }
        </div>
    )
}
export default Layout
