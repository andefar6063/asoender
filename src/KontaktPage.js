import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

function Kontakt() {
    const form = useRef();
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_EMAILJS_USER_ID
            )
            .then(
                () => {
                    console.log('SUCCESS!');
                    setSent(true);
                    setLoading(false);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setError('Kunne ikke sende besked. Prøv igen senere.');
                    setLoading(false);
                }
            );
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="bg-bgCard p-10 rounded-xl shadow-lg max-w-lg w-full mx-5">
                <h1 className="text-5xl font-bold text-gray-800 mb-5">Kontakt</h1>
                {sent ? (
                    <p className="text-lg text-gray-600 text-center">Tak for din besked! Vi vender tilbage hurtigst muligt.</p>
                ) : (
                    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-lg text-gray-600">Navn:</label>
                            <input
                                type="text"
                                name="user_name"
                                id="name"
                                required
                                className="p-3 border-2 border-quaternary rounded-md text-base font-primary focus:border-inputOutline focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-lg text-gray-600">Email:</label>
                            <input
                                type="email"
                                name="user_email"
                                id="email"
                                required
                                className="p-3 border-2 border-quaternary rounded-md text-base font-primary focus:border-inputOutline focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-lg text-gray-600">Besked:</label>
                            <textarea
                                name="message"
                                id="message"
                                required
                                className="p-3 border-2 border-quaternary rounded-md text-base font-primary focus:border-inputOutline focus:outline-none resize-none h-28"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="p-3 bg-primary text-secondary rounded-md text-lg transition-colors hover:bg-blue-800"
                            disabled={loading}
                        >
                            {loading ? 'Sender...' : 'Send'}
                        </button>
                        {error && <p className="text-red-500">{error}</p>}
                    </form>
                )}
            </div>
        </div>
    );
}

export default Kontakt;