import React from "react";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Session from 'react-session-api'; // Importing react-session-api

import Footer from "../components/footer";
import Header from "../components/header";

function QuotePage() {
    const navigate = useNavigate();

    // Retrieve the theme and quote from the session
    const theme = Session.get("theme");
    const quote = Session.get("quote"); // Assuming the quote is stored with the key 'quote'

    // Function to handle navigating back
    const handleSubmit = () => {
        navigate('/');
    };

    return (
        <motion.div
            className="container-fluid"
            style={{
                fontFamily: "'Roboto', sans-serif",
                background: 'linear-gradient(to right, #4CAF50, #81C784)', // Green gradient background
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            <Header />

            <motion.div
                className="row justify-content-center my-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <div className="col-lg-6 col-md-8 col-sm-10">
                    <div
                        className="card shadow-lg border-0 p-5"
                        style={{
                            background: 'white',
                            borderRadius: '15px',
                            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <h2
                            className="text-center mb-4"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontWeight: '600',
                                fontSize: '1.8rem',
                            }}
                        >
                            Here's your quote
                        </h2>

                        {/* Display the theme and quote */}
                        <div className="form-group">
                            <p style={{ fontSize: '1.2rem', fontWeight: '500', textAlign: 'center' }}>
                                <span style={{ fontStyle: 'italic', color: '#4CAF50' }}>Theme:</span> {theme}
                            </p>
                            <p style={{ fontSize: '1.5rem', fontWeight: '700', textAlign: 'center' }}>
                                "{quote}"
                            </p>
                        </div>

                        <div className="text-center mt-4">
                            <button
                                onClick={handleSubmit}
                                className="btn btn-success"
                                style={{
                                    borderRadius: '30px',
                                    padding: '10px 20px',
                                    fontSize: '1.1rem',
                                    backgroundColor: '#81C784',
                                    color: '#fff',
                                    transition: 'background-color 0.3s ease',
                                }}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#66BB6A'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = '#81C784'}
                            >
                                Want another? Click here
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>

            <Footer />
        </motion.div>
    );
}

export default QuotePage;
