import React, { useState } from 'react';
import './styles/MainHeader.scss';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import Headroom from 'react-headroom';
import NavLogo from '@images/NavLogo.webp'

const MainHeader = () => {
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
                            <div className='logo'
                                onClick={() =>
                                    window.scrollTo({
                                        top: 0,
                                        behavior: 'smooth'
                                    })}>
                                <img src={NavLogo.src} alt="NavLogo" className='NavLogo' />
                            </div>
                            <Fade top cascade delay={300}>
                                <ul
                                    className={`navigation-ul ${isActive &&
                                        'navigation-ul-active'}`}>
                                    <li onClick={() => handleIsActive(false)}>
                                        <Link
                                            href='/#about'
                                            activeClass='active-scroll'
                                            to='AboutMe'
                                            spy={true}
                                            smooth={true}
                                            offset={-220}
                                            ignoreCancelEvents={true}
                                            duration={1200}>
                                            <span>01.</span>About
                                        </Link>
                                    </li>
                                    <li onClick={() => handleIsActive(false)} className='projects-menu' >
                                        <Link
                                            href='/#project'
                                            to='Projects'
                                            spy={true}
                                            smooth={true}
                                            offset={-150}
                                            ignoreCancelEvents={true}
                                            duration={1200}>
                                            <span>02.</span>Projects
                                        </Link>
                                    </li>
                                    <li onClick={() => handleIsActive(false)}>
                                        <Link
                                            href='/#portfolio'
                                            to='Portfolio'
                                            spy={true}
                                            smooth={true}
                                            offset={-150}
                                            ignoreCancelEvents={true}
                                            duration={1200}>
                                            <span>03.</span>Portfolio
                                        </Link>
                                    </li>
                                    <li onClick={() => handleIsActive(false)} className='projects-menu' >
                                        <Link
                                            href="/#tutorial"
                                            to='Tutorials'
                                            spy={true}
                                            smooth={true}
                                            offset={-150}
                                            ignoreCancelEvents={true}
                                            duration={1200}>
                                            <span>04.</span>Tutorial
                                        </Link>
                                    </li>
                                    <li onClick={() => handleIsActive(false)}>
                                        <Link
                                            href='/#contact'
                                            to='Contact'
                                            spy={true}
                                            smooth={true}
                                            offset={-150}
                                            ignoreCancelEvents={true}
                                            duration={1200}>
                                            <span>05.</span>Contact
                                        </Link>
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

export default MainHeader;
