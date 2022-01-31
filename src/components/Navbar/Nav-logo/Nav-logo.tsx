import React from 'react';
import { Link } from 'react-router-dom';

import SUMLogo from '../../../assets/SUM_no_text.png';
import SUMText from '../../../assets/SUM_text.png';
import './Nav-logo.scss';
import { Tablet } from '../../Devices/Tablet';
import { Mobile } from '../../Devices/Mobile';

interface NavLogoProps {
    isActive: boolean;
    onChange: (value: boolean) => void;
}

const NavLogo = (props: NavLogoProps) => {
    const { isActive, onChange } = props;

    const handleChange = () => {
        if (isActive) {
            onChange(!isActive);
        }
    };

    return (
        <div className="Nav-logo">
            <Link to="/" className="logo-holder row" onClick={handleChange}>
                <img src={SUMLogo} className="logo" alt="SUM logo" />
                <Tablet>
                    <img
                        src={SUMText}
                        className="logo-text tablet-text"
                        alt="Sport Utility Marine"
                    />
                </Tablet>
                <Mobile>
                    <img
                        src={SUMText}
                        className="logo-text mobile-text"
                        alt="Sport Utility Marine"
                    />
                </Mobile>
            </Link>
        </div>
    );
};
export default NavLogo;
