import React from 'react';
import { Link } from 'react-router-dom';

import SUMLogo from '../../../assets/SUM_no_text.png';
import SUMText from '../../../assets/SUM_text.png';
import './Nav-logo.scss';
import { Tablet } from '../../Devices/Tablet';
import { Mobile } from '../../Devices/Mobile';
import { Desktop } from '../../Devices/Desktop';

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
        <div className="Nav-logo touch">
            <Link to="/" className="logo-holder row" onClick={handleChange}>
                <Desktop>
                    <img src={SUMLogo} className="logo" alt="SUM logo" />
                </Desktop>
                <Tablet>
                    <img
                        src={SUMLogo}
                        className="logo tablet-logo"
                        alt="SUM logo"
                    />
                    <img
                        src={SUMText}
                        className="logo-text tablet-text-logo"
                        alt="Sport Utility Marine"
                    />
                </Tablet>
                <Mobile>
                    <img
                        src={SUMLogo}
                        className="logo mobile-logo"
                        alt="SUM logo"
                    />
                </Mobile>
            </Link>
        </div>
    );
};
export default NavLogo;
