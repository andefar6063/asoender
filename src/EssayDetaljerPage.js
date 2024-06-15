// src/EssayDetaljerPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import supabase from './supabaseClient';
import './styles/essaydetaljer.css';

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
        <div className='essay-detail-container'>
            <div className="essay-detail">
                <h1>{essay.heading}</h1>
                <p>{essay.text}</p>
            </div>
        </div>
    );
}

export default EssayDetail;