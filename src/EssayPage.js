import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import supabase from './supabaseClient';
import './styles/essays.css';

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
    }, []); // Empty dependency array means this runs once when component mounts

    return (
        <div className="essay-page">
            <section className="essay-page-hero">
                <div className="essay-page-hero-content">
                    <h1>Kommentarer</h1>
                    <p>Udforsk mine kommentarer, der dækker en række emner, som fascinerer mig.</p>
                </div>
            </section>

            <section className="essay-page-list">
                {essays.map((essay) => (
                    <div key={essay.id} className="essay-page-item">
                        <h2>
                            <Link to={`/kommentar/${essay.id}`}>{essay.heading}</Link>
                        </h2>
                        <h3>{essay.text.substring(0, 100)}...</h3>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Essays;