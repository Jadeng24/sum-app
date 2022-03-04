import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import BoatItem from './BoatItem/BoatItem';
import './Boats.scss';

export interface Boat {
    name: string;
    length: number;
    type: string;
    width: number;
    model: string;
    featuredImage?: string;
    description: string;
    seats: number;
    weight: number;
    fuel: number;
    height: number;
    price: number;
    storage: number;
    weightCapacity: number;
    hull: string;
    id: number;
}
const Boats = () => {
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

    useEffect(() => {
        getBoats();
    }, []);

    return (
        <div className="Page Boats">
            <Banner title="Boats" />
            {boats &&
                boats.length &&
                boats.map((boat) =>
                    boat.type === 'aluminum' ? (
                        <div>aluminum</div>
                    ) : (
                        <div>inflatable</div>
                    )
                )}
        </div>
    );
};

export default Boats;
