import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import BoatItem from './BoatItem/BoatItem';
import './Boats.scss';

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
                boats.map((boat) => {
                    return (
                        <div>
                            {boat.type === 'sport' && <div>Sport</div>}

                            {boat.type === 'centerConsole' && (
                                <div>Center Console</div>
                            )}

                            {boat.type === 'landingCraft' && (
                                <div>Landing Craft</div>
                            )}
                        </div>
                    );
                })}
        </div>
    );
};

export default Boats;
