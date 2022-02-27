/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import ImageUploader from '../../../components/ImageUploader/ImageUploader';

const CreateBoatForm = () => {
    const [createStatus, setCreateStatus] = useState('Submit');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setCreateStatus('Creating...');
        const { name, email, message, copy } = e.target.elements;
        const details = {
            name: name.value,
            email: email.value,
            message: message.value,
            copy: copy.value,
        };
        const response = await fetch('/api/boats', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(details),
        });
        setCreateStatus('Create');
        const result = await response.json();
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <div>
                <label htmlFor="name">Name*</label>
                <input type="text" id="name" required />
            </div>
            <ImageUploader />
            {/* TODO: make these actual boat fields */}
            <div>
                <label htmlFor="email">Email*</label>
                <input type="email" id="email" required />
            </div>
            <div>
                <label htmlFor="message">Message*</label>
                <textarea id="message" required />
            </div>
            <div className="column">
                <label htmlFor="message">Send me an email copy</label>
                <input type="checkbox" id="copy" />
            </div>

            <button className="square-button" type="submit">
                {createStatus}
            </button>
        </form>
    );
};

export default CreateBoatForm;
