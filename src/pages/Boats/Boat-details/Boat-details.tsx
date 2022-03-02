/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';

import './Boat-details.scss';

interface BoatDetailsProps {
    name: string;
    length: number;
    width: number;
    model: string;
    featuredImage: string;
    description: string;
    onDeleteBoat: () => void;
    isAdmin?: boolean;
}

const BoatDetails = (props: BoatDetailsProps) => {
    const {
        name,
        length,
        width,
        model,
        featuredImage,
        description,
        onDeleteBoat,
        isAdmin,
    } = props;
    return (
        <div className="Boat-details">
            {isAdmin && <MdDelete onClick={onDeleteBoat} />}
            <div>{name}</div>
            <img src={featuredImage} alt={name} />
            <div>{description}</div>
            <div>{length}</div>
            <div>{width}</div>
            <div>{model}</div>
        </div>
    );
};

export default BoatDetails;
