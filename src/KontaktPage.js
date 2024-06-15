import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './styles/kontakt.css';

function Kontakt() {
    const form = useRef();
    const [sent, setSent] = useState(false);
    const [error, setError] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_USER_ID)
            .then(
                () => {
                    console.log('SUCCESS!');
                    setSent(true);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setError('Kunne ikke sende besked. Prøv igen senere.');
                }
            );
    };

    return (
        <div className='kontakt-page-container'>
            <div className="kontakt-page">
                <h1>Kontakt</h1>
                {sent ? (
                    <p>Tak for din besked! Vi vender tilbage hurtigst muligt.</p>
                ) : (
                    <form ref={form} onSubmit={sendEmail} className="kontakt-page-form">
                        <div className="kontakt-page-form-group">
                            <label htmlFor="name">Navn:</label>
                            <input
                                type="text"
                                name="user_name"
                                id="name"
                                required
                            />
                        </div>
                        <div className="kontakt-page-form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                name="user_email"
                                id="email"
                                required
                            />
                        </div>
                        <div className="kontakt-page-form-group">
                            <label htmlFor="message">Besked:</label>
                            <textarea
                                name="message"
                                id="message"
                                required
                            ></textarea>
                        </div>
                        <button type="submit">Send</button>
                        {error && <p>{error}</p>}
                    </form>
                )}
            </div>
        </div>
    );
}

export default Kontakt;