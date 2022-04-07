/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { Boat } from '../../../types/Types';

import './BoatItem.scss';

interface BoatItemProps {
    boat: Boat;
    onDeleteBoat: () => void;
    isAdmin?: boolean;
}

const BoatItem = (props: BoatItemProps) => {
    const { boat, onDeleteBoat, isAdmin } = props;

    return (
        <div className="BoatItem">
            {isAdmin && <MdDelete onClick={onDeleteBoat} />}
            <div>{boat.name}</div>

            <img
                className="boat-image"
                src={boat.featured_image}
                alt={boat.name}
            />
            {boat.images &&
                boat.images.map((imageUrl) => (
                    <img src={imageUrl} alt={boat.name} />
                ))}

            <div>Description: {boat.description}</div>
            <div>Length: {boat.length}&apos;</div>
            <div>Width: {boat.width}&apos;</div>
            <div>Model: {boat.model}</div>
        </div>
    );
};

export default BoatItem;
