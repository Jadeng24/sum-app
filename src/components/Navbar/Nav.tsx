import React, { useState } from 'react';

import NavLogo from './Nav-logo/Nav-logo';
import NavLinks from './Nav-Links/Nav-Links';
import { Desktop } from '../Devices/Desktop';
import HamburgerMenu from './Hamburger-Menu/Hamburger-Menu';
import { TabletAndMobile } from '../Devices/TabletAndMobile';

import './Nav.scss';
import NavLinksMobile from './Nav-Links-Mobile/Nav-Links-Mobile';

const Nav = () => {
    const [isActive, setActive] = useState(false);
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
            </Desktop>

            <TabletAndMobile>
                {/* Add login */}
                <HamburgerMenu
                    isActive={isActive}
                    onChange={(value: boolean) => {
                        setActive(value);
                    }}
                />
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
