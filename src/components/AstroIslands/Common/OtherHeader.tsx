import { useState } from 'react';
import './styles/OtherHeder.scss';
import Fade from 'react-reveal/Fade';
import Headroom from 'react-headroom';
import NavLogo from '@images/NavLogo.png'

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
                                        <a href="/#projects">
                                            <span>02.</span>Projects
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/tutorial">
                                            <span>03.</span>Tutorial
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#education">
                                            <span>04.</span>Education
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#testimonial">
                                            <span>05.</span>Testimonial
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#contact">
                                            <span>06.</span>Contact
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
