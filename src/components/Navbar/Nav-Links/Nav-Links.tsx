import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
    const currentUserEmail = localStorage.getItem('currentUserEmail');
    const adminUser = currentUserEmail === 'jaden.goodwin24@gmail.com';
    return (
        <div className="nav-links">
            <div className="flex text-links">
                {adminUser && (
                    <NavLink
                        to="/admin"
                        className={({ isActive }) =>
                            isActive ? 'active nav-link' : 'inactive nav-link'
                        }
                    >
                        Admin
                    </NavLink>
                )}
                <NavLink
                    to="/boats"
                    className={({ isActive }) =>
                        isActive ? 'active nav-link' : 'inactive nav-link'
                    }
                >
                    Boats
                </NavLink>
                <NavLink
                    to="/shop"
                    className={({ isActive }) =>
                        isActive ? 'active nav-link' : 'inactive nav-link'
                    }
                >
                    Shop
                </NavLink>
                <NavLink
                    to="/engines"
                    className={({ isActive }) =>
                        isActive ? 'active nav-link' : 'inactive nav-link'
                    }
                >
                    Engines
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive ? 'active nav-link' : 'inactive nav-link'
                    }
                >
                    Contact
                </NavLink>
            </div>
        </div>
    );
};

export default NavLinks;
