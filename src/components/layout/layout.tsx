import React, {useEffect} from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import './layout.scss'

const Layout = ({ children }) => {

    useEffect(() => {
        setTimeout(() =>{
            window.scrollTo(0, 0)
        }, 100)
    }, [])

    return (
        <div className="layout">
            <Navbar />
            <div id="main-content">
                { children }
            </div>
            <Footer />
        </div>
    )
}
export default Layout
