import React from 'react'
import SocialMediaIcons from '../social-media-icons/social-media-icons'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { setShowModal } from '../../../index'
import facebook_logo from '../social-media-icons/images/facebook.webp'
import linkedin from '../social-media-icons/images/linkedin.webp'
import twitter from '../social-media-icons/images/twitter.webp'
import './portfolio-header.less'

const PortfolioHeader = () => {
  const dispatch = useDispatch()

        return (
        <Navbar bg="light" expand="md" collapseOnSelect className="sticky-top">
  <Navbar.Brand href="#home">Tayden Flitcroft's Portfolio</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link onClick={() => dispatch(setShowModal(true)) }>Resume</Nav.Link>
      <Nav.Link href="#work-history">Work History</Nav.Link>
      <NavDropdown title="Contact Information">
      <NavDropdown.Item>Email</NavDropdown.Item>
        <NavDropdown.Item>
          <img src={ facebook_logo } alt=''/>
          Facebook
          </NavDropdown.Item>
        <NavDropdown.Item>
        <img src={ linkedin } alt=''/>
          LinkedIn
          </NavDropdown.Item>
        <NavDropdown.Item>
        <img src={ twitter } alt=''/>
          Twitter
          </NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <SocialMediaIcons />
  </Navbar.Collapse>
</Navbar>
        )
    }

export default PortfolioHeader;