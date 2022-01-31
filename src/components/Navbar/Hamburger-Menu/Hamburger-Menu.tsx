/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import './Hamburger-Menu.scss';

interface HamburgerProps {
    isActive: boolean;
    onChange: (value: boolean) => void;
}
const HamburgerMenu = (props: HamburgerProps) => {
    const { isActive, onChange } = props;

    const handleChange = () => onChange(!isActive);
    return (
        <div
            id="menu"
            onClick={handleChange}
            className={isActive ? 'open' : ''}
        >
            <span />
            <span />
            <span />
            <span />
        </div>
    );
};

export default HamburgerMenu;
