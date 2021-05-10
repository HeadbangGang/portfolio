import React from 'react'
import PropTypes from 'prop-types'
import SocialMediaIcons from '../social-media-icons/social-media-icons'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './portfolio-header.less'

const PortfolioHeader = ({ setShowModal }) => {

    PortfolioHeader.propTypes = {
        setShowModal: PropTypes.func,
    }

    return (
        <Navbar bg="light" expand="md" collapseOnSelect className="sticky-top">
            <Navbar.Brand href="#home">Tayden Flitcroftʼs Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link onClick={() => setShowModal(true)}>
                        Resume
                    </Nav.Link>
                    <Nav.Link href="#work-history">Work History</Nav.Link>
                    <NavDropdown title="Contact Information">
                        <NavDropdown.Item>
                        Email
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                        Facebook
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                        LinkedIn
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                        Twitter
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <SocialMediaIcons />
            </Navbar.Collapse>
        </Navbar>
    )
}

export default PortfolioHeader