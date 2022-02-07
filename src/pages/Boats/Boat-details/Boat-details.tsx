import React from 'react';
import './Boat-details.scss';

interface BoatDetailsProps {
    name: string;
    length: number;
    width: number;
    model: string;
    featuredImage: string;
}
const BoatDetails = (props: BoatDetailsProps) => {
    const { name, length, width, model, featuredImage } = props;
    return (
        <div className="Boat-details">
            <div>{name}</div>
            <img src={featuredImage} alt={name} />
            <div>{length}</div>
            <div>{width}</div>
            <div>{model}</div>
        </div>
    );
};

export default BoatDetails;
