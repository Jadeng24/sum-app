/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import ImageUploader from '../../../components/ImageUploader/ImageUploader';

const CreateBoatForm = () => {
    const boatLengthOptions = [
        { value: 6, label: `6'` },
        { value: 7, label: `7'` },
        { value: 8, label: `8'` },
        { value: 9, label: `9'` },
        { value: 10, label: `10'` },
        { value: 11, label: `11'` },
        { value: 12, label: `12'` },
        { value: 14, label: `14'` },
        { value: 16, label: `16'` },
        { value: 18, label: `18'` },
        { value: 20, label: `20'` },
        { value: 21, label: `21'` },
        { value: 22, label: `22'` },
        { value: 23, label: `23'` },
        { value: 24, label: `24'` },
        { value: 25, label: `25'` },
        { value: 26, label: `26'` },
    ];

    const boatTypeOptions = [
        { value: 'aluminum', label: 'Aluminum' },
        { value: 'inflatable', label: 'Inflatable' },
    ];

    const [createStatus, setCreateStatus] = useState('Submit');

    const [name, setName] = useState('');
    const [length, setLength] = useState(boatLengthOptions[6].value); // 12
    const [type, setType] = useState(boatTypeOptions[0].value); // aluminum
    const [description, setDescription] = useState('');
    const [featuredImage, setFeaturedImage] = useState('');
    const [images, setImages] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setCreateStatus('Creating...');

        const boatData = {
            name,
            length,
            type,
            width: 6,
            model: 'AL14jet',
            featuredImage: '',
            description,
        };

        const response = await fetch('/api/boats', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(boatData), // send form data
        });
        setCreateStatus('Create');

        const result = await response.json();
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <div className="column" style={{ maxWidth: '500px' }}>
                <label htmlFor="name">Name*</label>
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
                        {boatLengthOptions.map((option) => (
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

            <div className="column">
                <label htmlFor="description">Description*</label>
                <textarea
                    id="message"
                    value={description}
                    placeholder="Enter a description"
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>

            {/* upload to cloudinary or whatever then save image_Id to new boat  */}
            <div className="column">
                <label htmlFor="boatImages">Boat Images</label>
                <ImageUploader />
            </div>
            <button className="square-button" type="submit">
                {createStatus}
            </button>
        </form>
    );
};

export default CreateBoatForm;
