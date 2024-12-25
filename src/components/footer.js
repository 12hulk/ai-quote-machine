import React from "react";

function Footer() {
    return (
        <footer
            className="bg-dark text-white text-center py-4 mt-5"
            style={{ background: 'linear-gradient(to right, #212121, #424242)' }}
        >
            <p className="mb-0" style={{ fontSize: '1rem' }}>
                Project by: <strong className="text-success" style={{ fontSize: '1.2rem' }}>Dilpreet Singh</strong>
            </p>
            <p className="mt-2" style={{ fontSize: '0.9rem' }}>© 2024 All Rights Reserved</p>
        </footer>
    );
}

export default Footer;
