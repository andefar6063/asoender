import { Link } from 'react-router-dom';
import { useState } from 'react';
import profilePicture from './images/headshot.png';
import './styles/index.css';

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
        <div className="mt-5 text-center">
            <div className="flex justify-center gap-2 mb-5">
                {messages.map((_, index) => (
                    <div key={index} className={`w-8 h-8 flex items-center justify-center rounded-full ${step >= index + 1 ? 'bg-blue-500 text-white' : 'bg-tertiary text-gray-700'}`}>{index + 1}</div>
                ))}
            </div>
            <p className="text-xl mb-5">Projekt {step}: {messages[step - 1].name}</p>
            <p className="text-lg text-gray-600 mb-5">{messages[step - 1].text}</p>
            <div className="flex justify-center gap-4">
                <button className="p-2 rounded-full bg-blue-500 text-white transition-transform transform hover:scale-105 hover:bg-blue-600" onClick={prev} disabled={step === 1}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                </button>
                <button className="p-2 rounded-full bg-blue-500 text-white transition-transform transform hover:scale-105 hover:bg-blue-600" onClick={next} disabled={step === messages.length}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

function Hjem() {
    return (
        <div className="w-full max-w-5xl px-5 py-3 mx-auto flex flex-col gap-10 items-center">
            <section className="w-full min-h-[calc(100vh-120px)] flex items-center justify-center relative bg-bgCard shadow-lg rounded-xl p-10 text-center overflow-hidden bg-fixed bg-cover bg-center">
                <div className="relative z-10 max-w-xl flex flex-col items-center text-center justify-center">
                    <h1 className="text-6xl font-bold text-gray-800 mb-5">Velkommen</h1>
                    <p className="text-2xl text-gray-600 mb-5">Dette er en personlig hjemmeside, hvor jeg deler min baggrund og mine tidligere projekter. Du vil også finde en samling af essays om emner, der fascinerer mig</p>
                    <Link to="/kontakt" className="inline-block px-5 py-2 mt-5 text-lg text-white bg-blue-500 rounded-md transition-transform transform hover:scale-105 hover:bg-blue-600">Kontakt mig</Link>
                </div>
            </section>
            <section className="w-full max-w-2xl p-10 bg-bgCard shadow-lg rounded-xl text-center">
                <h2 className="text-3xl mb-5">Om mig</h2>
                <div className="flex flex-col items-center mb-5">
                    <img src={profilePicture} alt="Profile" className="w-36 h-36 rounded-md mb-5 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105" />
                </div>
                <p className="text-lg text-gray-600 mb-4">Hej, jeg er en ung gut med en passion for programmering, skriveri, iværksætteri og selvudvikling. I øjeblikket studerer jeg på gymnasie, men i min fritid fordyber jeg mig i mine interesser.</p>
            </section>

            <section className="w-full max-w-2xl p-10 bg-bgCard shadow-lg rounded-xl text-center">
                <h2 className="text-3xl mb-5">Specifikt om mine færdigheder</h2>
                <p className="text-lg text-gray-600 mb-4">Jeg har færdigheder inden for både backend- og frontend-udvikling og arbejdet med Python, JavaScript (inklusiv Node.js og React.js) samt Go-Language.</p>
            </section>
            <section className="w-full max-w-2xl p-10 bg-bgCard shadow-lg rounded-xl text-center">
                <h2 className="text-3xl mb-5">Tidligere projekter</h2>
                <PreviousWork />
            </section>
        </div>
    );
}

export default Hjem;
