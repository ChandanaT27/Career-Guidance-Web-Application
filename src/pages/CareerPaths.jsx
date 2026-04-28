import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Wrench, Code, Palette, Filter } from 'lucide-react';
import { careerPaths } from '../data/careers';

const CareerPaths = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', ...new Set(careerPaths.map(c => c.category))];

    const filteredPaths = filter === 'All'
        ? careerPaths
        : careerPaths.filter(c => c.category === filter);

    return (
        <div className="page-container" style={{ padding: '2rem 0' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Explore Career Paths</h1>
                <p style={{ color: 'var(--text-color)', opacity: 0.8 }}>Find the right path for your future success.</p>
            </motion.div>

            {/* Filter Section */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        style={{
                            padding: '0.5rem 1.5rem',
                            borderRadius: '20px',
                            border: `1px solid ${filter === cat ? 'var(--primary-color)' : 'var(--text-color)'}`,
                            background: filter === cat ? 'var(--primary-color)' : 'transparent',
                            color: filter === cat ? 'white' : 'var(--text-color)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                {filteredPaths.map((career) => (
                    <Link to={`/course/${career.id}`} key={career.id}>
                        <motion.div
                            whileHover={{ y: -10 }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            style={{
                                background: 'var(--card-bg)',
                                borderRadius: '16px',
                                padding: '1.5rem',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}
                        >
                            <div style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>
                                {/* Simple icon logic based on category/title could be improved, using generic for now if not dynamic */}
                                <h3 style={{ fontSize: '1.5rem', margin: '0 0 0.5rem' }}>{career.title}</h3>
                                <span style={{
                                    fontSize: '0.8rem',
                                    padding: '0.2rem 0.6rem',
                                    background: 'rgba(100, 108, 255, 0.1)',
                                    borderRadius: '12px',
                                    color: 'var(--primary-color)'
                                }}>
                                    {career.category}
                                </span>
                            </div>

                            <p style={{ color: 'var(--text-color)', opacity: 0.8, lineHeight: '1.6', flex: 1 }}>
                                {career.description}
                            </p>

                            <div style={{ marginTop: '1.5rem', fontWeight: '500', color: 'var(--primary-color)' }}>
                                View Full Roadmap →
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CareerPaths;
