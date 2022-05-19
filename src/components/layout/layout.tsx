import React from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import './layout.scss'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <section id="main-content">
                { children }
            </section>
            <Footer />
        </>
    )
}
export default Layout
