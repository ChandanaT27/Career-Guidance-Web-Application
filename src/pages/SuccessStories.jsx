import React from 'react';
import { motion } from 'framer-motion';
import { successStories } from '../data/successStories';
import { Quote } from 'lucide-react';

const SuccessStories = () => {
    return (
        <div style={{ padding: '2rem 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Hall of Fame</h1>
                <p style={{ opacity: 0.8, fontSize: '1.2rem' }}>Stories that inspire generations.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                {successStories.map((story, index) => (
                    <motion.div
                        key={story.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        style={{
                            background: 'var(--card-bg)',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                        }}
                    >
                        <div style={{ height: '250px', overflow: 'hidden' }}>
                            <img
                                src={story.image}
                                alt={story.name}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                                onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                            />
                        </div>
                        <div style={{ padding: '2rem' }}>
                            <h2 style={{ marginBottom: '0.2rem' }}>{story.name}</h2>
                            <p style={{ color: 'var(--primary-color)', fontWeight: '500', marginBottom: '1.5rem' }}>{story.role}</p>

                            <div style={{ position: 'relative', background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', marginBottom: '1.5rem' }}>
                                <Quote size={24} style={{ position: 'absolute', top: '10px', left: '10px', opacity: 0.3 }} />
                                <p style={{ fontStyle: 'italic', zIndex: 1, position: 'relative' }}>"{story.quote}"</p>
                            </div>

                            <p style={{ lineHeight: '1.6', opacity: 0.9 }}>{story.bio}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default SuccessStories;
