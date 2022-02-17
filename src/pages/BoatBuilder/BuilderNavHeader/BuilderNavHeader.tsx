import React from 'react';

import './BuilderNavHeader.scss';

interface BuilderNavHeaderProps {
    model: string;
}
const BuilderNavHeader = (props: BuilderNavHeaderProps) => {
    const { model } = props;
    return <div className="BuilderNavHeader">{model}</div>;
};

export default BuilderNavHeader;
