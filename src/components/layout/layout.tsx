import React from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div>
                { children }
            </div>
            <Footer />
        </>
    )
}
export default Layout
