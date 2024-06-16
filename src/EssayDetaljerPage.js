import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import supabase from './supabaseClient';

function useEssay(id) {
    const [essay, setEssay] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const fetchEssay = async () => {
            try {
                const { data, error } = await supabase
                    .from('kommentarer')
                    .select('*')
                    .eq('id', id)
                    .single();

                if (error) {
                    throw new Error(error.message);
                }

                if (isMounted) {
                    setEssay(data);
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

        fetchEssay();

        return () => {
            isMounted = false;
        };
    }, [id]);

    return { essay, loading, error };
}

function EssayDetail() {
    const { id } = useParams();
    const { essay, loading, error } = useEssay(id);

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

    if (!essay) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-2xl">Ingen kommentar fundet</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen px-5 pb-3 flex items-center justify-center">
            <div className="max-w-2xl mx-auto p-5 bg-white rounded-xl shadow-lg text-pretty">
                <h1 className="text-3xl mb-5">{essay.heading}</h1>
                <p className="text-lg text-gray-700 mb-4">{essay.text}</p>
            </div>
        </div>
    );
}

export default EssayDetail;