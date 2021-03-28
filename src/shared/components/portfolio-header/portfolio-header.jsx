import React from 'react'
import SocialMediaIcons from '../social-media-icons/social-media-icons'
import { Navbar, Nav } from 'react-bootstrap'
import './portfolio-header.less'
export default class PortfolioHeader extends React.Component {
    render () {
        return (
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Tayden Flitcroft's Portfolio</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="http://resume.taydenflitcroft.com/" target="_blank">Resume</Nav.Link>
      <Nav.Link href="#work-history">Work History</Nav.Link>
      <Nav.Link href="#contact-information">Contact Information</Nav.Link>
    </Nav>
    <SocialMediaIcons />
  </Navbar.Collapse>
</Navbar>
        )
    }
}