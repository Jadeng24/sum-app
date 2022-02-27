import React, { MouseEventHandler, useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import { productColor } from '../../types/Types';
import BoatDetails from './Boat-details/Boat-details';
import './Boats.scss';

interface Boat {
    id: number;
    type: string;
    name: string;
    length: number;
    colors: productColor[];
    description: string;
}
const Boats = () => {
    const [createStatus, setCreateStatus] = useState('Create');
    const [deleteStatus, setDeleteStatus] = useState('Delete');
    const [boats, setBoats] = useState([]);

    const getBoats = async () => {
        const response = await fetch('/api/boats', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
        });
        const result = await response.json();
        setBoats(result.data);
        console.log(result.data);
    };

    const handleDeleteBoat = async (id: number) => {
        setDeleteStatus('Deleting...');
        const response = await fetch(`/api/boats/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
        });
        setDeleteStatus('Delete');
        const result = await response.json();
        if (result.status === 200) {
            getBoats(); // filter list instead without boat
        }
    };

    useEffect(() => {
        getBoats();
    }, []);

    return (
        <div className="Page Boats">
            <Banner title="Boats" />

            <div>Total Boats: {boats && boats.length}</div>
            {boats &&
                boats.length &&
                boats.map((boat) => {
                    return (
                        <BoatDetails
                            name={boat.name}
                            length={boat.length}
                            width={boat.width}
                            model={boat.model}
                            featuredImage={boat.featured_image}
                            description={boat.description}
                            key={boat.id}
                            onDeleteBoat={() => {
                                handleDeleteBoat(boat.id);
                            }}
                        />
                    );
                })}
        </div>
    );
};

export default Boats;
