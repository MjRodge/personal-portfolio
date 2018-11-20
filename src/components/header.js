import React from 'react'
import { Link } from 'gatsby'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import Headroom from 'react-headroom'
import './styles/menubar.css'

class Header extends React.Component {
  render() {
    return (
      <Headroom>
        <div id="navbar">
          <ul id="navList">
            <li>
              <button id="home-nav" className="nav-button name-nav">
                Michael J. Rodgers
              </button>
            </li>
            <li>
              <button id="portfolio-nav" className="nav-button nav-item">
                PORTFOLIO
              </button>
            </li>
            <li>
              <button id="contact-nav" className="nav-button nav-item">
                CONTACT
              </button>
            </li>
            <li>
              <button className="nav-button nav-item social-media">
                <FaLinkedin className="header-social-icon" />
              </button>
            </li>
            <li>
              <button className="nav-button nav-item social-media">
                <FaGithub className="header-social-icon" />
              </button>
            </li>
          </ul>
        </div>
      </Headroom>
    )
  }
}

export default Header
