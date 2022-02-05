import React from 'react';

import './Banner.scss';

interface BannerProps {
    title: string;
}
const Banner = (props: BannerProps) => {
    const { title } = props;
    return <div className="Banner flex">{title}</div>;
};

export default Banner;
