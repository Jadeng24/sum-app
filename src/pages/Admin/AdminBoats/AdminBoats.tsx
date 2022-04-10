import React, { useEffect, useState } from 'react';
import { Boat } from '../../../types/Types';
import BoatItem from '../../Boats/BoatItem/BoatItem';
import CreateBoatForm from './CreateBoatForm';

const AdminBoats = () => {
    const [createStatus, setCreateStatus] = useState('Create');
    const [deleteStatus, setDeleteStatus] = useState('Delete');
    const [selectedBoat, setSelectedBoat] = useState(null);
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
            getBoats(); // filter list instead without getting boats
        }
    };

    const handleBoatSelection = (boat: Boat) => {
        setSelectedBoat(boat);
    };
    useEffect(() => {
        getBoats();
    }, []);

    return (
        <div className="column">
            <h2>Add a new Boat</h2>
            <CreateBoatForm editBoat={selectedBoat} />
            {boats &&
                boats.length &&
                boats.map((boat) => {
                    return (
                        <BoatItem
                            boat={boat}
                            key={boat.id}
                            onDeleteBoat={() => {
                                handleDeleteBoat(boat.id);
                            }}
                            onSelectBoat={() => {
                                handleBoatSelection(boat);
                            }}
                            isSelected={selectedBoat?.id === boat.id}
                            isAdmin // Show delete
                        />
                    );
                })}
        </div>
    );
};

export default AdminBoats;
