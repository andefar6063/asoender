import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import supabase from './supabaseClient';

function EssayDetail() {
    const { id } = useParams();
    const [essay, setEssay] = useState(null);

    useEffect(() => {
        const fetchEssay = async () => {
            const { data, error } = await supabase
                .from('kommentarer')
                .select('*')
                .eq('id', id)
                .single();

            if (error) {
                console.error('Error fetching essay:', error.message, error.details);
            } else {
                setEssay(data);
            }
        };

        fetchEssay();
    }, [id]);

    if (!essay) {
        return <div>Ingen kommentar fundet</div>;
    }

    return (
        <div className="min-h-screen p-5">
            <div className="max-w-2xl mx-auto p-5 bg-bgCard rounded-xl shadow-lg">
                <h1 className="text-5xl text-primary mb-5">{essay.heading}</h1>
                <p className="text-lg text-gray-600">{essay.text}</p>
            </div>
        </div>
    );
}

export default EssayDetail;
