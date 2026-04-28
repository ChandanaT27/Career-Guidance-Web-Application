import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, GraduationCap, Coins, Briefcase, TrendingUp } from 'lucide-react';
import { careerPaths } from '../data/careers';

const CourseDetails = () => {
    const { courseId } = useParams();
    const course = careerPaths.find(c => c.id === courseId);

    if (!course) {
        return (
            <div style={{ textAlign: 'center', padding: '4rem' }}>
                <h2>Course not found</h2>
                <Link to="/career-paths" className="btn">Back to Careers</Link>
            </div>
        );
    }

    return (
        <div style={{ padding: '2rem 0' }}>
            <Link to="/career-paths" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', opacity: 0.8 }}>
                <ArrowLeft size={20} /> Back to Courses
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="course-header"
                style={{ marginBottom: '3rem' }}>
                <span style={{ color: 'var(--primary-color)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>{course.category}</span>
                <h1 style={{ fontSize: '3rem', margin: '0.5rem 0 1rem' }}>{course.title}</h1>
                <p style={{ fontSize: '1.2rem', opacity: 0.8, maxWidth: '800px', lineHeight: '1.6' }}>{course.overview}</p>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                <InfoCard icon={<GraduationCap />} title="Duration" value={course.duration} />
                <InfoCard icon={<Coins />} title="Est. Fees" value={course.fees} />
                <InfoCard icon={<TrendingUp />} title="Avg. Salary" value={course.salary} />
            </div>

            <div style={{ display: 'grid', md: { gridTemplateColumns: '2fr 1fr' }, gap: '3rem' }}>
                <div>
                    <Section title="Career Roadmap">
                        <div style={{ borderLeft: '2px solid var(--primary-color)', paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {course.roadmap.map((step, index) => (
                                <div key={index} style={{ position: 'relative' }}>
                                    <div style={{
                                        position: 'absolute',
                                        left: '-2.55rem',
                                        top: '0',
                                        width: '1rem',
                                        height: '1rem',
                                        background: 'var(--primary-color)',
                                        borderRadius: '50%'
                                    }}></div>
                                    <h3 style={{ margin: '0 0 0.5rem' }}>{step.step}</h3>
                                    <p style={{ margin: 0, opacity: 0.8 }}>{step.detail}</p>
                                </div>
                            ))}
                        </div>
                    </Section>

                    <Section title="Top Colleges / Institutes">
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {course.colleges.map((college, idx) => (
                                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.8rem' }}>
                                    <CheckCircle size={18} color="var(--primary-color)" /> {college}
                                </li>
                            ))}
                        </ul>
                    </Section>
                </div>

                <div>
                    <Section title="Required Skills">
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                            {course.skills.map((skill, idx) => (
                                <span key={idx} style={{ background: 'var(--card-bg)', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </Section>

                    <Section title="Career Opportunities">
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {course.careerOpportunities.map((job, idx) => (
                                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.8rem' }}>
                                    <Briefcase size={18} color="var(--primary-color)" /> {job}
                                </li>
                            ))}
                        </ul>
                    </Section>

                    <div style={{
                        marginTop: '3rem',
                        padding: '2rem',
                        background: 'linear-gradient(135deg, var(--primary-color), var(--primary-hover))',
                        borderRadius: '16px',
                        color: 'white',
                        textAlign: 'center'
                    }}>
                        <h3 style={{ margin: '0 0 1rem' }}>Motivation</h3>
                        <p style={{ fontStyle: 'italic', fontSize: '1.1rem' }}>"{course.motivation}"</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Section = ({ title, children }) => (
    <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', borderBottom: '2px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>{title}</h2>
        {children}
    </div>
);

const InfoCard = ({ icon, title, value }) => (
    <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{ background: 'rgba(100, 108, 255, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--primary-color)' }}>
            {icon}
        </div>
        <div>
            <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>{title}</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{value}</div>
        </div>
    </div>
);

export default CourseDetails;
