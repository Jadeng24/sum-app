import React, { useEffect, useState } from 'react';
import BoatDetails from '../../Boats/Boat-details/Boat-details';
import CreateBoatForm from './CreateBoatForm';

const AdminBoats = () => {
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
        <div className="column">
            <h2>Add a new Boat</h2>
            <CreateBoatForm />
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
                            isAdmin // Show delete
                        />
                    );
                })}
        </div>
    );
};

export default AdminBoats;
