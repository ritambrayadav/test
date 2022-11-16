import React from 'react'
import logo from '../images/logo.png'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons'
function Header() {
    return (
        <div>
            <header>
                <div className='left_header'>
                <img alt="airbnb_logo" src={logo} />
                </div>

                <div className='right_header'>
                <p>Become a host </p>
                <a className='globe'>
                <FontAwesomeIcon icon={ faGlobe } aria-hidden="true"/>
                </a>
                <a className='profile'>
                    <span>
                <FontAwesomeIcon icon={ faBars } aria-hidden="true"/>
                </span>
                <span>
                <FontAwesomeIcon icon={ faUserCircle } aria-hidden="true"/>
                </span>
                </a>
                </div>
            </header>
        </div>
    )
}

export default Header
