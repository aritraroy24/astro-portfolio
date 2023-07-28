// library import
import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Headroom from 'react-headroom';
import { FaSearch } from 'react-icons/fa'

// style import
import './styles/OtherHeder.scss';

// asset import
import NavLogo from '@images/NavLogo.webp'

const OtherHeder = () => {
    const [isActive, handleIsActive] = useState(false);

    return (
        <>
            <div
                className={`blur-hide ${isActive && 'blur-show'}`}
                onClick={() => handleIsActive(false)}></div>
            <div className={`nav-wrapper-mobile`}></div>
            <div className='nav-wrapper'>
                <Headroom disableInlineStyles>
                    <Fade>
                        <nav className='NavContainer'>
                            <div
                                className={`hamburger-menu ${isActive &&
                                    'hamburger-menu-active'}`}
                                onClick={() => handleIsActive(!isActive)}>
                                <div className='bar-1'></div>
                                <div className='bar-2'></div>
                                <div className='bar-3'></div>
                            </div>
                            <div className='logo'>
                                <a href="/"><img src={NavLogo.src} alt="NavLogo" className='NavLogo' /></a>
                            </div>
                            <Fade top cascade delay={300}>
                                <ul
                                    className={`navigation-ul ${isActive &&
                                        'navigation-ul-active'}`}>
                                    <li>
                                        <a href="/#about">
                                            <span>01.</span>About
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/projects/chemistry">
                                            <span>02.</span>Projects

                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#portfolio">
                                            <span>03.</span>Portfolio
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/tutorial">
                                            <span>04.</span>Tutorial
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#contact">
                                            <span>05.</span>Contact
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/search' title='Search Posts'>
                                            <FaSearch id='searchIcon' />
                                        </a>
                                    </li>
                                </ul>
                            </Fade>
                        </nav>
                    </Fade>
                </Headroom>
            </div>
        </>
    );
};

export default OtherHeder;
