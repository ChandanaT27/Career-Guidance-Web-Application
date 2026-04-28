import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div className="home-page">
            <section className="hero" style={{ textAlign: 'center', padding: '4rem 0' }}>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>
                    Design Your Future
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    style={{ fontSize: '1.25rem', color: 'var(--text-color)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                    The ultimate career guidance platform for students after 10th standard. Explore paths, compare courses, and build your roadmap to success.
                </motion.p>
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}>
                    <Link to="/career-paths" className="btn" style={{ fontSize: '1.2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                        Explore Paths <ArrowRight size={20} />
                    </Link>
                </motion.div>
            </section>

            <section className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', padding: '2rem 0' }}>
                <FeatureCard icon={<BookOpen size={40} />} title="Comprehensive Courses" description="Detailed insights into Science, Commerce, Arts, and vocational streams." />
                <FeatureCard icon={<Users size={40} />} title="Expert Guidance" description="Curated advice and roadmaps to help you make informed decisions." />
                <FeatureCard icon={<Trophy size={40} />} title="Success Stories" description="Get inspired by real-life journeys of successful professionals." />
            </section>
        </div>
    );
};

const FeatureCard = ({ icon, title, description }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="feature-card"
        style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
        <div style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>{icon}</div>
        <h3 style={{ marginBottom: '0.5rem' }}>{title}</h3>
        <p style={{ color: '#666' }}>{description}</p>
    </motion.div>
);

export default Home;
