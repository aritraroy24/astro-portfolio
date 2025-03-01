// library import
import React, { useState, useEffect } from 'react';

// style import 
import './styles/ContactForm.scss';

const ContactForm = () => {
    const [status, updateStatus] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const isDisabled = !name || !email || !message || isSubmitted;
        const submitButton = document.querySelector('button[type="submit"]') as HTMLButtonElement | null;
        if (submitButton) {
            submitButton.disabled = isDisabled;
            if (isSubmitting) {
                submitButton.innerText = 'Submitting...';
            }
        }
    }, [name, email, message, isSubmitting, isSubmitted]);

    useEffect(() => {
        if (status === 'SUCCESS') {
            window.location.href = '/contact-success';
        }
    }, [status]);

    const submitForm = async (event: any) => {
        event.preventDefault();
        const form = event.target;
        setIsSubmitting(true);
        setIsSubmitted(true);
        const data = new FormData(form);
        try {
            const res = await fetch('/contact.php', {
                method: 'POST',
                body: data,
            });
            const result = await res.json();
            if (result.result === 'success') {
                updateStatus('SUCCESS');
            }
            else {
                window.location.href = "/contact-error";
            }
        }
        catch (error) {
            console.error('Form submission error:', error);
            window.location.href = "/contact-error";
        }
    }

    return (
        <form
            className='ContactForm'
            onSubmit={submitForm}
            method={'POST'}>
            <label htmlFor="contactName">Name:</label>
            <input
                title='Name'
                type='text'
                name='Name'
                value={name}
                required
                onChange={(event) => setName(event.target.value)}
                autoComplete="on"
                id="contactName"
            />
            <label htmlFor="contactNumber">Phone No:</label>
            <input
                title='Phone'
                type='number'
                name='Phone'
                autoComplete="on"
                id="contactNumber"
            />
            <label htmlFor="contactEmail">Email:</label>
            <input
                title='Email'
                type='email'
                name='Email'
                value={email}
                required
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="on"
                id="contactEmail"
            />
            <label className='message' htmlFor="contactMessage">Message:</label>
            <h4>Hello Aritra,</h4>
            <textarea
                title='Message'
                name='Message'
                value={message}
                required
                onChange={(event) => setMessage(event.target.value)}
                id="contactMessage"
            >
            </textarea>
            {status === 'SUCCESS' ? (
                <div className="success-message">Message sent successfully! Redirecting...</div>
            ) : (
                <button id="subBtn" type='submit' disabled={isSubmitting || isSubmitted}>
                    {isSubmitting ? 'Submitting...' : 'Send Message'}
                </button>
            )}
        </form>
    );
};

export default ContactForm;