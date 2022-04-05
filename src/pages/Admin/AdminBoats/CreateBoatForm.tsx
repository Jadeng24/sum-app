/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import ImageUploader from '../../../components/ImageUploader/ImageUploader';

const CreateBoatForm = () => {
    const boatLengthOptions = [
        { value: 7, label: `7'` },
        { value: 8, label: `8'` },
        { value: 9, label: `9'` },
        { value: 10, label: `10'` },
        { value: 10.5, label: `10.5'` },
        { value: 11, label: `11'` },
        { value: 11.5, label: `11.5'` },
        { value: 12, label: `12'` },
        { value: 12.5, label: `12.5'` },
        { value: 13, label: `13'` },
        { value: 13.5, label: `13.5'` },
        { value: 14, label: `14'` },
        { value: 14.5, label: `14.5'` },
        { value: 15, label: `15'` },
        { value: 16, label: `16'` },
        { value: 17, label: `17'` },
        { value: 18, label: `18'` },
        { value: 20, label: `20'` },
        { value: 21, label: `21'` },
        { value: 22, label: `22'` },
    ];

    const boatTypeOptions = [
        { value: 'sport', label: 'Sport' },
        { value: 'centerConsole', label: 'Center Console' },
        { value: 'landingCraft', label: 'Landing Craft' },
        { value: 'inflatable', label: 'Inflatable' },
    ];

    const boatSeatOptions = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];

    const [formSubmitted, setFormSubmitted] = useState(false);

    const [name, setName] = useState('');
    const [length, setLength] = useState(boatLengthOptions[10].value); // 12
    const [type, setType] = useState(boatTypeOptions[0].value); // aluminum
    const [height, setHeight] = useState(3);
    const [width, setWidth] = useState(5);
    const [seats, setSeats] = useState(boatSeatOptions[3]);
    const [fuel, setFuel] = useState(10); // in gallons
    const [weightCapacity, setWeightCapacity] = useState(600); // in lbs
    const [storage, setStorage] = useState(10); // in Cubic feet.
    const [maxHp, setMaxHp] = useState(170);
    const [price, setPrice] = useState(29999); // in USD
    const [description, setDescription] = useState('');
    const [featuredImage, setFeaturedImage] = useState('');
    const [images, setImages] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormSubmitted(true);

        const boatData = {
            name,
            length,
            type,
            height,
            width,
            seats,
            fuel,
            weightCapacity,
            storage,
            maxHp,
            price,
            model: 'AL14jet',
            featuredImage: '',
            description,
        };
        setTimeout(() => {
            setFormSubmitted(false);
        }, 5000);
        // const response = await fetch('/api/boats', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json;charset=utf-8',
        //     },
        //     body: JSON.stringify(boatData), // send form data
        // });

        // const result = await response.json();
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <div className="column" style={{ maxWidth: '500px' }}>
                <label htmlFor="name" style={{ fontWeight: '600' }}>
                    Name*
                </label>
                <input
                    type="text"
                    id="name"
                    required
                    value={name}
                    placeholder="ex: AL14 Jet Boat"
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="row space-between">
                <div
                    className="column"
                    style={{ width: 'calc(50% - 15px)', maxWidth: '500px' }}
                >
                    <label htmlFor="length">Length*</label>
                    <select
                        id="length"
                        value={length}
                        onChange={(e) => setLength(Number(e.target.value))}
                        required
                    >
                        {boatLengthOptions.map((option, i) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div
                    className="column"
                    style={{ width: 'calc(50% - 15px)', maxWidth: '500px' }}
                >
                    <label htmlFor="type">Type*</label>
                    <select
                        id="type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        required
                    >
                        {boatTypeOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="row space-between">
                <div
                    className="column"
                    style={{ width: 'calc(50% - 15px)', maxWidth: '500px' }}
                >
                    <label htmlFor="length">Width*</label>
                    <input
                        type="number"
                        id="name"
                        required
                        value={width}
                        min={1}
                        max={14}
                        onChange={(e) => setWidth(Number(e.target.value))}
                    />
                </div>
                <div
                    className="column"
                    style={{ width: 'calc(50% - 15px)', maxWidth: '500px' }}
                >
                    <label htmlFor="length">Height*</label>
                    <input
                        type="number"
                        id="name"
                        required
                        value={height}
                        min={1}
                        max={20}
                        onChange={(e) => setHeight(Number(e.target.value))}
                    />
                </div>
            </div>

            <div className="row space-between">
                <div
                    className="column"
                    style={{ width: 'calc(50% - 15px)', maxWidth: '500px' }}
                >
                    <label htmlFor="length">Seats*</label>
                    <select
                        id="seats"
                        value={seats}
                        onChange={(e) => setSeats(Number(e.target.value))}
                        required
                    >
                        {boatSeatOptions.map((number, i) => (
                            <option key={number} value={number}>
                                {number}
                            </option>
                        ))}
                    </select>
                </div>
                <div
                    className="column"
                    style={{ width: 'calc(50% - 15px)', maxWidth: '500px' }}
                >
                    <label htmlFor="length">Fuel* (Gallons)</label>
                    <input
                        type="number"
                        id="name"
                        required
                        value={fuel}
                        min={1}
                        max={200}
                        onChange={(e) => setFuel(Number(e.target.value))}
                    />
                </div>
            </div>

            <div className="row space-between">
                <div
                    className="column"
                    style={{ width: 'calc(50% - 15px)', maxWidth: '500px' }}
                >
                    <label htmlFor="length">Weight Capacity* (Lbs.)</label>
                    <input
                        type="number"
                        id="name"
                        required
                        value={weightCapacity}
                        min={1}
                        max={20000}
                        onChange={(e) =>
                            setWeightCapacity(Number(e.target.value))
                        }
                    />
                </div>
                <div
                    className="column"
                    style={{ width: 'calc(50% - 15px)', maxWidth: '500px' }}
                >
                    <label htmlFor="length">Storage* (Cu Ft.)</label>
                    <input
                        type="number"
                        id="name"
                        required
                        value={storage}
                        onChange={(e) => setStorage(Number(e.target.value))}
                    />
                </div>
            </div>

            <div className="row space-between">
                <div
                    className="column"
                    style={{ width: 'calc(50% - 15px)', maxWidth: '500px' }}
                >
                    <label htmlFor="length">Max Horsepower*</label>
                    <input
                        type="number"
                        id="name"
                        required
                        value={maxHp}
                        min={1}
                        max={3000}
                        onChange={(e) => setMaxHp(Number(e.target.value))}
                    />
                </div>
                <div
                    className="column"
                    style={{ width: 'calc(50% - 15px)', maxWidth: '500px' }}
                >
                    <label htmlFor="length" style={{ fontWeight: '600' }}>
                        Base Price* (USD)
                    </label>
                    <div className="row inputHolder">
                        <div className="inputSymbol">
                            <BsCurrencyDollar />
                        </div>

                        <input
                            type="number"
                            id="name"
                            required
                            value={price}
                            min={1}
                            max={200000}
                            onChange={(e) => setPrice(Number(e.target.value))}
                        />
                    </div>
                </div>
            </div>

            <div className="column">
                <label htmlFor="description">Description*</label>
                <textarea
                    id="message"
                    value={description}
                    placeholder="Enter a description"
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            {/* upload to cloudinary or whatever then save image_Id to new boat  */}
            <div className="column">
                <label htmlFor="boatImages">Boat Images</label>
                <ImageUploader onSubmit={formSubmitted} />
            </div>
            <button className="square-button" type="submit">
                {formSubmitted ? 'Uploading...' : 'Submit'}
            </button>
        </form>
    );
};

export default CreateBoatForm;
