import React, { useState } from 'react';
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
}
const Boats = () => {
    const [status, setStatus] = useState('Create');
    const [boats, setBoats] = useState([]);

    const getBoats = async (e) => {
        e.preventDefault();
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

    const createBoat = async (e) => {
        e.preventDefault();
        setStatus('Creating...');
        // const { name, email, message, copy } = e.target.elements;
        const details = {
            name: 'aluminum',
            email: 'aluminum',
            message: 'aluminum',
            copy: 'aluminum',
        };
        const response = await fetch('/api/boats', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(details),
        });
        setStatus('Create');
        const result = await response.json();
        alert(result.status);
    };
    return (
        <div className="Page Boats">
            <Banner title="Boats" />
            {/* <Grid container justify="center" spacing={4}>
                {boats.map((boat) => (
                    <Grid item key="boat.id" xs={12} sm={12} md={6} lg={4}>
                        <div>{boat.name}</div>
                        <div>{boat.length}</div>
                    </Grid>
                ))}
            </Grid> */}
            <button type="submit" onClick={createBoat}>
                {status}
            </button>
            <button type="submit" onClick={getBoats}>
                get boats
            </button>
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
                        />
                    );
                })}
        </div>
    );
};

export default Boats;
