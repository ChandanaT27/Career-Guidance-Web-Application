import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, GraduationCap } from 'lucide-react';

const Header = ({ darkMode, toggleDarkMode }) => {
    return (
        <header>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: 'bold' }}>
                <GraduationCap size={32} color="var(--primary-color)" />
                CareerGuide
            </Link>
            <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <Link to="/">Home</Link>
                <Link to="/career-paths">Career Paths</Link>
                <Link to="/success-stories">Success Stories</Link>
                <Link to="/about">About</Link>
                <button onClick={toggleDarkMode} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-color)' }}>
                    {darkMode ? <Sun size={24} /> : <Moon size={24} />}
                </button>
            </nav>
        </header>
    );
};

export default Header;
