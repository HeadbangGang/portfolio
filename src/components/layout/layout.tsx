import React, {useContext, useEffect} from 'react'
import { NavigationContext } from '../../providers/navigation'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import {PortfolioDataContext} from '../../providers/portfolio-data'
import './layout.scss'

const Layout = ({ children }) => {
    const { hasMounted } = useContext(NavigationContext)
    const { fetchProjectData } = useContext(PortfolioDataContext)

    useEffect(() => {
        setTimeout(() =>{
            window.scrollTo(0, 0)
        }, 100)
        fetchProjectData()
    }, [])

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
