import React from 'react';

import './BoatSlideInfo.scss';

interface BoatSlideInfoProps {
    name: string;
    length: number;
}
const BoatSlideInfo = (props: BoatSlideInfoProps) => {
    const { name, length } = props;
    return (
        <div className="BoatSlideInfo column">
            <h2>{name}</h2>
            <div>Length: {length}&apos; Hull</div>
        </div>
    );
};

export default BoatSlideInfo;
