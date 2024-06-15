// src/HjemPage.js
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './styles/hjem.css';

// Import profile picture
import profilePicture from './images/headshot.png';

function PreviousWork() {
    const messages = [
        { name: "Eternity AIO", text: "Eternity AIO var mit første programmeringsprojekt. Det blev udviklet i Python og fungerede som en bot, der brugte requests til at købe eksklusive sko ved lancering. Projektet blev lukket kort før min rejse til USA, men det blev brugt af mange til at forbedre deres chancer for at få fat i skoene." },
        { name: "Personlig AI Træner", text: "Jeg har udviklet en personlig træner ved hjælp af AI (OpenAI's API). Projektet blev lavet i vanilla JavaScript med en Node.js API. Det var et privat projekt til en ven, der havde efterspurgt det." },
    ];

    const [step, setStep] = useState(1);

    function next() {
        if (step < messages.length) setStep(step + 1);
    }

    function prev() {
        if (step > 1) setStep(step - 1);
    }

    return (
        <div className="steps">
            <div className="numbers">
                {messages.map((_, index) => (
                    <div key={index} className={step >= index + 1 ? "active" : ""}>{index + 1}</div>
                ))}
            </div>
            <p className="message">Projekt {step}: {messages[step - 1].name}</p>
            <p className="description">{messages[step - 1].text}</p>

            <div className="buttons">
                <button className="button prev" onClick={() => prev()} disabled={step === 1}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                </button>
                <button className="button next" onClick={() => next()} disabled={step === messages.length}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

function Hjem() {
    return (
        <div className="home-page-container">
            <section className="home-page-container-hero">
                <div className="home-page-container-hero-content">
                    <h1>Velkommen</h1>
                    <p>Dette er en personlig hjemmeside, hvor jeg deler min baggrund og mine tidligere projekter. Du vil også finde en samling af essays om emner, der fascinerer mig</p>
                    <Link to="/kontakt" className="home-page-container-cta-button">Kontakt mig</Link>
                    <div className="home-page-container-scroll-indicator"></div>
                </div>
            </section>

            <section className="home-page-container-about">
                <h2>Om mig</h2>
                <img src={profilePicture} alt="Profile" className="profile-picture" />
                <p>
                    Hej, jeg er en ung gut med en passion for programmering, skriveri, iværksætteri og selvudvikling. I øjeblikket studerer jeg på gymnasie, men i min fritid fordyber jeg mig i mine interesser. Jeg har arbejdet på flere mindre projekter, heriblandt denne hjemmeside, hvor jeg har udviklet en bred vifte af færdigheder.
                </p>
            </section>

            <section className="home-page-container-more-info">
                <h2>Specifikt om mine færdigheder</h2>
                <p>
                    Jeg har færdigheder inden for både backend- og frontend-udvikling og har erfaring med programmeringssprog som Python, JavaScript (inklusive Node.js og React.js) samt Go.
                </p>
            </section>

            <section className='home-page-container-previous-work'>
                <h2>Tidligere projekter</h2>
                <PreviousWork />
            </section>
        </div>
    );
}

export default Hjem;