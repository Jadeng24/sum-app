import React from 'react';
import { Link } from 'react-router-dom';

import './Button.scss';

interface ButtonProps {
    text: string;
    link: string;
    // eslint-disable-next-line react/require-default-props
    secondary?: boolean;
}
const Button = (props: ButtonProps) => {
    const { text, link, secondary } = props;
    return (
        <div className="Button">
            <Link
                className={`Button ${secondary ? 'secondary' : ''} `}
                to={`/${link}`}
            >
                {text}
            </Link>
        </div>
    );
};

export default Button;
