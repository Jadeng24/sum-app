/* eslint-disable no-shadow */
import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginModal from '../../Login-Modal/Login-Modal';

import './Nav-Links-Mobile.scss';

interface NavLinksMobileProps {
    isActive: boolean;
    onChange: (value: boolean) => void;
}
const NavLinksMobile = (props: NavLinksMobileProps) => {
    const { isActive, onChange } = props;

    const closeNav = () => {
        onChange(!isActive);
    };

    const currentUserEmail = localStorage.getItem('currentUserEmail');
    const adminUser = currentUserEmail === 'jaden.goodwin24@gmail.com'; // change this to get column from users DB table
    return (
        <div
            className={`flex column mobile-links nav-links ${
                isActive ? 'active' : ''
            }`}
        >
            <NavLink
                to="/boats"
                onClick={closeNav}
                className={({ isActive }) =>
                    isActive ? 'active nav-link' : 'inactive nav-link'
                }
            >
                Boats
            </NavLink>
            <NavLink
                to="/shop"
                onClick={closeNav}
                className={({ isActive }) =>
                    isActive ? 'active nav-link' : 'inactive nav-link'
                }
            >
                Shop
            </NavLink>
            <NavLink
                to="/engines"
                onClick={closeNav}
                className={({ isActive }) =>
                    isActive ? 'active nav-link' : 'inactive nav-link'
                }
            >
                Engines
            </NavLink>
            <NavLink
                to="/contact"
                onClick={closeNav}
                className={({ isActive }) =>
                    isActive ? 'active nav-link' : 'inactive nav-link'
                }
            >
                Contact
            </NavLink>
            <NavLink
                to="/boat-builder"
                onClick={closeNav}
                className={({ isActive }) =>
                    isActive ? 'active nav-link' : 'inactive nav-link'
                }
            >
                Boat Builder
            </NavLink>
            {adminUser && (
                <NavLink
                    to="/admin"
                    onClick={closeNav}
                    className={({ isActive }) =>
                        isActive ? 'active nav-link' : 'inactive nav-link'
                    }
                >
                    Admin
                </NavLink>
            )}
        </div>
    );
};

export default NavLinksMobile;
