import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import supabase from './supabaseClient';

function useEssays() {
    const [essays, setEssays] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const fetchEssays = async () => {
            try {
                const { data, error } = await supabase
                    .from('kommentarer')
                    .select('*');

                if (error) {
                    throw new Error(error.message);
                }

                if (isMounted) {
                    setEssays(data);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err.message);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchEssays();

        return () => {
            isMounted = false;
        };
    }, []);

    return { essays, loading, error };
}

function Essays() {
    const { essays, loading, error } = useEssays();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-2xl">Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-2xl text-red-500">Error: {error}</div>
            </div>
        );
    }

    if (!essays) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-2xl">Ingen kommentar fundet</div>
            </div>
        );
    }

    return (
        <div className="w-full max-w-5xl px-5 py-3 mx-auto flex flex-col gap-10 items-center">
            <section className="h-52 flex items-center justify-center relative bg-bgCard shadow-lg rounded-xl mb-5 p-10 text-center">
                <div className="max-w-xl flex flex-col items-center text-center justify-center">
                    <h1 className="text-5xl font-bold text-gray-800 mb-5">Kommentarer</h1>
                    <p className="text-lg text-gray-600 mb-4">Udforsk mine kommentarer, der dækker en række emner, som fascinerer mig.</p>
                </div>
            </section>

            <section className="flex flex-col gap-5 max-w-2xl mx-auto">
                {essays.map((essay) => (
                    <div key={essay.id} className="bg-bgCard p-5 rounded-xl shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
                        <h2 className="text-3xl font-bold text-gray-800">
                            <Link to={`/kommentar/${essay.id}`}>{essay.heading}</Link>
                        </h2>
                        <h3 className="text-lg text-gray-600 mb-4">{essay.text.substring(0, 100)}...</h3>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Essays;
