/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

const Contact = () => {
    const [status, setStatus] = useState('Submit');
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        const { name, email, message } = e.target.elements;
        const details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(details),
        });
        setStatus('Submit');
        const result = await response.json();
        alert(result.status);
    };
    return (
        <div className="Page Contact column">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" required />
                </div>
                <button type="submit">{status}</button>
            </form>
        </div>
    );
};

export default Contact;
