import React from 'react';

const About = () => {
    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 0' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '2rem', textAlign: 'center' }}>About CareerGuide</h1>
            <div style={{ background: 'var(--card-bg)', padding: '3rem', borderRadius: '16px', lineHeight: '1.8', fontSize: '1.1rem' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                    <strong>CareerGuide</strong> is dedicated to helping students navigate the complex world of career choices after 10th standard. We believe every student deserves a clear roadmap to their dreams.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    Our platform provides comprehensive insights into various streams including Science, Commerce, Arts, and vocational courses. We combine data-driven advise with real-world success stories to inspire the next generation of leaders.
                </p>
                <p>
                    Whether you aspire to be an engineer, a doctor, an artist, or an entrepreneur, we have the guidance you need to take that first confident step.
                </p>
            </div>
        </div>
    );
};

export default About;
