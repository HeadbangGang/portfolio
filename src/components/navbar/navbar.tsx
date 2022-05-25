import React, { useContext, useEffect, useState } from 'react'
import {useNavigate} from 'react-router'
import {PAGE_URL} from '../../helpers/helpers'
import {UIContext} from '../../providers/ui'
import './navbar.scss'

interface NavigationButtonsInterface {
    text: string
    onClick: () => void
}

const Navbar = () => {
    const navigate = useNavigate()

    const [showNavigationButtonDropdown, setShowNavigationDropdown] = useState<boolean>(false)
    const [dropdownClass, setDropdownClass] = useState<string>('hidden')
    const [hasMounted, setHasMounted] = useState<boolean>(false)

    const { isSmallView } = useContext(UIContext)

    useEffect(() => {
        const cursor = document.getElementsByClassName('typed-cursor') as HTMLCollectionOf<HTMLElement>
        if (showNavigationButtonDropdown) {
            setDropdownClass('visible')
            if (cursor.length) {
                cursor[0].style.opacity = '0'
            }
        }
        if (hasMounted && !showNavigationButtonDropdown) {
            setDropdownClass('closing')
            setTimeout(() => {
                setDropdownClass('hidden')
                if (cursor.length) cursor[0].style.opacity = 'initial'
            }, 200)
        }
        !hasMounted && setHasMounted(true)
    }, [showNavigationButtonDropdown])

    const handleOnClick = (onClick) => {
        setShowNavigationDropdown(false)
        onClick()
    }

    const navigationButtons = [
        { text: 'Home', onClick: () => navigate(PAGE_URL.HOMEPAGE) },
        { text: 'Resume', onClick: () => navigate(PAGE_URL.RESUME) },
        { text: 'Work Experience', onClick: () => navigate(PAGE_URL.WORK_EXPERIENCE) },
        { text: 'Projects', onClick: () => navigate(PAGE_URL.PROJECTS) },
        { text: 'Contact', onClick: () => navigate(PAGE_URL.CONTACT) }
    ].map((attr: NavigationButtonsInterface, idx: number) => (
        <button className={ `navigation-button-${idx}`} onClick={() => handleOnClick(attr.onClick)} key={ idx }>{ attr.text }</button>
    ))

    return (
        <header>
            <div className="navbar">
                <div className="navbar__logo">
                    <button onClick={() => navigate(PAGE_URL.HOMEPAGE)}>
                        <img alt="html-tag" src="assets/media/html-tag.png" />
                    </button>
                </div>
                <div className="navbar__toggle">
                    <button onClick={() => setShowNavigationDropdown(!showNavigationButtonDropdown)}>
                        <img alt="menu-icon" src="assets/media/menu-icon.png" />
                    </button>
                </div>
                <div className="navbar__nav-buttons">
                    { navigationButtons }
                </div>
            </div>
            { isSmallView &&
                <div className={`navbar__button-dropdown ${dropdownClass}`}>
                    {navigationButtons}
                </div>
            }
        </header>
    )
}

export default Navbar
