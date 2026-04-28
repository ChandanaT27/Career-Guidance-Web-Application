import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode(!darkMode);

    return (
        <div className="layout">
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
