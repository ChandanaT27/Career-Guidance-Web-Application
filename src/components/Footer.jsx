import React from 'react';

const Footer = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} CareerGuide. All rights reserved.</p>
            <div style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#666' }}>
                <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
            </div>
        </footer>
    );
};

export default Footer;
