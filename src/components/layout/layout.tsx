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

    useEffect(() => { //come back to this. This should scroll to id if hash is in url when navigating pages
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1))
            if (elem) {
                elem.scrollIntoView({behavior: 'smooth'})
            }
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
