import React, { useState } from 'react';
import './styles/MainHeader.scss';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import Headroom from 'react-headroom';
import NavLogo from '@images/NavLogo.png'

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
                                    <Link
                                        activeClass='active-scroll'
                                        to='AboutMe'
                                        spy={true}
                                        smooth={true}
                                        offset={50}
                                        ignoreCancelEvents={true}
                                        duration={1200}>
                                        <li onClick={() => handleIsActive(false)}>
                                            <span>01.</span>About
                                        </li>
                                    </Link>
                                    <Link
                                        to='Projects'
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        ignoreCancelEvents={true}
                                        duration={1200}>
                                        <li onClick={() => handleIsActive(false)} className='projects-menu' >
                                            <span>02.</span>Projects
                                        </li>
                                    </Link>
                                    <Link
                                        to='Portfolio'
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        ignoreCancelEvents={true}
                                        duration={1200}>
                                        <li onClick={() => handleIsActive(false)}>
                                            <span>03.</span>Portfolio
                                        </li>
                                    </Link>
                                    <Link
                                        to='Blogs'
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        ignoreCancelEvents={true}
                                        duration={1200}>
                                        <li onClick={() => handleIsActive(false)} className='projects-menu' >
                                            <span>04.</span>Tutorials
                                        </li>
                                    </Link>
                                    <Link
                                        to='Contact'
                                        spy={true}
                                        smooth={true}
                                        offset={30}
                                        ignoreCancelEvents={true}
                                        duration={1200}>
                                        <li onClick={() => handleIsActive(false)}>
                                            <span>05.</span>Contact
                                        </li>
                                    </Link>
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
