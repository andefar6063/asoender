import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import supabase from './supabaseClient';

function Essays() {
    const [essays, setEssays] = useState([]);

    useEffect(() => {
        const fetchEssays = async () => {
            const { data, error } = await supabase
                .from('kommentarer')
                .select('*');

            if (error) {
                console.error('Error fetching essays:', error.message, error.details);
            } else {
                setEssays(data);
            }
        };

        fetchEssays();
    }, []);

    return (
        <div className="flex flex-col gap-5 p-5 min-h-screen">
            <section className="h-52 flex items-center justify-center relative bg-bgCard shadow-lg rounded-xl mb-5 p-10 text-center">
                <div className="max-w-xl flex flex-col items-center text-center justify-center">
                    <h1 className="text-5xl font-bold text-gray-800 mb-5">Kommentarer</h1>
                    <p className="text-lg text-gray-600">Udforsk mine kommentarer, der dækker en række emner, som fascinerer mig.</p>
                </div>
            </section>

            <section className="flex flex-col gap-5 max-w-2xl mx-auto">
                {essays.map((essay) => (
                    <div key={essay.id} className="bg-bgCard p-5 rounded-xl shadow-lg transition-transform transform hover:translate-y-[-3px]">
                        <h2 className="text-3xl mb-5">
                            <Link to={`/kommentar/${essay.id}`} className="transition-colors hover:text-blue-800">{essay.heading}</Link>
                        </h2>
                        <h3 className="text-base text-gray-600">{essay.text.substring(0, 100)}...</h3>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Essays;
