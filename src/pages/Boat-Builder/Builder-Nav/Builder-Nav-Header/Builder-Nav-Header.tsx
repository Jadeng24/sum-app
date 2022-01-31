import React from 'react';

import './Builder-Nav-Header.scss';

interface BuilderNavHeaderProps {
    model: string;
}
const BuilderNavHeader = (props: BuilderNavHeaderProps) => {
    const { model } = props;
    return <div className="Builder-Nav-Header">{model}</div>;
};

export default BuilderNavHeader;
