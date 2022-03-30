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
            <img src={boat.featured_image} alt={boat.name} />
            <div>{boat.description}</div>
            <div>{boat.length}</div>
            <div>{boat.width}</div>
            <div>{boat.model}</div>
        </div>
    );
};

export default BoatItem;
