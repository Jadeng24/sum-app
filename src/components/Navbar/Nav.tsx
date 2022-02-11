/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { MdLogin, MdShoppingCart } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

import NavLogo from './Nav-logo/Nav-logo';
import NavLinks from './Nav-Links/Nav-Links';
import { Desktop } from '../Devices/Desktop';
import HamburgerMenu from './Hamburger-Menu/Hamburger-Menu';
import { TabletAndMobile } from '../Devices/TabletAndMobile';

import NavLinksMobile from './Nav-Links-Mobile/Nav-Links-Mobile';
import LoginModal from '../Login-Modal/Login-Modal';
import NavIcons from './Nav-Icons/Nav-Icons';

import './Nav.scss';

const Nav = () => {
    const [isActive, setActive] = useState(false);
    const [cartCount, setCartCount] = useState(0);

    return (
        <nav className={`${isActive ? 'mobile-active' : ''}`}>
            <NavLogo
                isActive={isActive}
                onChange={(value: boolean) => {
                    setActive(value);
                }}
            />
            <Desktop>
                <NavLinks />
                <div className="flex right-nav">
                    <NavIcons />
                    <NavLink className="build-link nav-link" to="/boat-builder">
                        Build
                    </NavLink>
                </div>
            </Desktop>

            <TabletAndMobile>
                <div className="flex">
                    <NavIcons />
                    <HamburgerMenu
                        isActive={isActive}
                        onChange={(value: boolean) => {
                            setActive(value);
                        }}
                    />
                </div>
                {isActive && (
                    <NavLinksMobile
                        isActive={isActive}
                        onChange={(value: boolean) => {
                            setActive(value);
                        }}
                    />
                )}
            </TabletAndMobile>
        </nav>
    );
};
export default Nav;
