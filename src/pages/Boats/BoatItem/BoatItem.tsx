/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { Boat } from '../../../types/Types';

import './BoatItem.scss';

interface BoatItemProps {
    boat: Boat;
    onDeleteBoat: () => void;
    onSelectBoat: (boat: Boat) => void;
    isSelected: boolean;
    isAdmin?: boolean;
}

const BoatItem = (props: BoatItemProps) => {
    const { boat, isAdmin, isSelected, onDeleteBoat, onSelectBoat } = props;

    const handleBoatSelection = () => {
        onSelectBoat(boat);
    };

    return (
        <div
            className={`BoatItem ${isSelected ? 'selected-boat' : ''}`}
            onClick={() => handleBoatSelection()}
        >
            {isAdmin && <MdDelete onClick={onDeleteBoat} />}
            <div>{boat.name}</div>
            {isSelected && <div>selected</div>}
            <div>
                <img
                    className="boat-image featured-image"
                    src={boat.featured_image}
                    alt={boat.name}
                />
            </div>

            <div className="image-gallery">
                {boat.images &&
                    boat.images.map((imageUrl) => (
                        <img
                            className="boat-image"
                            src={imageUrl}
                            alt={boat.name}
                        />
                    ))}
            </div>
            <div>Description: {boat.description}</div>
            <div>Length: {boat.length}&apos;</div>
            <div>Width: {boat.width}&apos;</div>
            <div>Model: {boat.model}</div>
        </div>
    );
};

export default BoatItem;
