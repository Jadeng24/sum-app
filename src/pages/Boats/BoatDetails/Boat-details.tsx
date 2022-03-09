/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { Boat } from '../Boats';

// import './BoatDetails.scss';

interface BoatDetailsProps {
    boat: Boat;
    onDeleteBoat: () => void;
    isAdmin?: boolean;
}

const BoatDetails = (props: BoatDetailsProps) => {
    const { boat, onDeleteBoat, isAdmin } = props;
    const { name, width } = boat;

    return (
        <div className="BoatDetails">
            {isAdmin && <MdDelete onClick={onDeleteBoat} />}
            <div>{name}</div>
            <img src={boat.featured_image} alt={boat.name} />
            <div>{boat.description}</div>
            <div>{boat.length}</div>
            <div>{boat.width}</div>
            <div>{boat.model}</div>
        </div>
    );
};

export default BoatDetails;
