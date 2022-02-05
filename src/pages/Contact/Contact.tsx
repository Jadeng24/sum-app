/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Banner from '../../components/Banner/Banner';
import { isTabletOrMobile } from '../../components/Devices/MediaQuery';
import MapBox from '../../components/MapBox/MapBox';
import './Contact.scss';

const Contact = () => {
    const [status, setStatus] = useState('Submit');
    const [isCaptchaValid, setIsCaptchaValid] = useState(null);

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

    const onCaptchaChange = (token: string | null) => {
        // setCaptcha()
        console.log(token);
        setIsCaptchaValid(token);
    };
    const captchaKey = process.env.REACT_APP_CAPTCHA_KEY || '';
    return (
        <div className="Page Contact column">
            <Banner title="Contact" />
            <div
                className={
                    isTabletOrMobile()
                        ? 'column isTabletOrMobile'
                        : 'row space-between'
                }
            >
                <div className="contact-section">
                    <h1>Send us a Message</h1>
                    <form onSubmit={handleSubmit} className="contact-form">
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
                        <ReCAPTCHA
                            sitekey={captchaKey}
                            onChange={onCaptchaChange}
                        />
                        <button
                            type="submit"
                            disabled={isCaptchaValid === null}
                        >
                            {status}
                        </button>
                    </form>
                </div>
                <div className="contact-section">
                    <div>
                        <h1>Sport Utility Marine</h1>
                        <h3>Phone: 801-796-7416</h3>
                        <h3>Email: sportutilitymarine@gmail.com</h3>
                        <h3>Hours: 10:00am to 5:00pm MDT</h3>
                        <h3>Address: 1459 West 40 South Lindon, Utah 84042</h3>
                    </div>
                    <MapBox />
                </div>
            </div>
        </div>
    );
};

export default Contact;
