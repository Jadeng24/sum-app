import React from 'react';
import Button from '../../../components/Button/Button';

import './Home-Section.scss';

interface HomeSectionProps {
    backgroundImg: any;
    link: string;
    title: string;
    subtitle: string;
}

const HomeSection = (props: HomeSectionProps) => {
    const { backgroundImg, link, title, subtitle } = props;
    return (
        <div
            className="Home-Section flex"
            style={{
                backgroundImage: `url( ${backgroundImg} )`,
            }}
        >
            <div className="section-content">
                <span className="column">
                    <h1 style={{ color: 'white', marginBottom: '12px' }}>
                        {title}
                    </h1>
                    <h3 style={{ color: 'white', marginTop: '0px' }}>
                        {subtitle}
                    </h3>
                </span>
                <Button text="Build Now" link={link} />
            </div>
        </div>
    );
};

export default HomeSection;
