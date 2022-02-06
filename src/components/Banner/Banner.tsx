/* eslint-disable react/require-default-props */
import React from 'react';

import './Banner.scss';

interface BannerProps {
    title: string;
    subtitle?: string;
}
const Banner = (props: BannerProps) => {
    const { title, subtitle } = props;
    return (
        <div className="Banner column">
            <span className="title-text">{title}</span>
            {subtitle && <span className="subtitle-text">{subtitle}</span>}
        </div>
    );
};

export default Banner;
