import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/header';
import Footer from '../components/footer';
import { useNavigate } from 'react-router-dom';
import Session from 'react-session-api'; // Importing react-session-api

const { GoogleGenerativeAI } = require("@google/generative-ai");


function Layout() {
    const [theme, setTheme] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('theme submitted:', theme);
        const genAI = new GoogleGenerativeAI("AIzaSyBKMFYTWI4z6NS7Zxo8XlhPAtrtF7gu968");

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `Give me one random quote every time that uou have not given before  on the theme "${theme}"`;

        const result = await model.generateContent(prompt);
        console.log(result.response.text());
        Session.set("quote", result.response.text())
        Session.set("theme", theme)

        navigate('/quotePage')

    };

    return (
        <motion.div
            className="container-fluid"
            style={{
                fontFamily: "'Roboto', sans-serif",
                background: 'linear-gradient(to right, #4CAF50, #81C784)',  // Green gradient background
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
                {/* Main form section */}
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
                            Enter the Theme
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="phoneNumber" className="text-muted" style={{ fontSize: '1.1rem' }}>
                                    Powered By Gemini
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="theme"
                                    value={theme}
                                    onChange={(e) => setTheme(e.target.value)}
                                    placeholder="e.g.Love,Motivation,Discipline....."
                                    style={{
                                        borderRadius: '30px',
                                        padding: '15px',
                                        fontSize: '1rem',
                                        borderColor: '#81C784',
                                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                        transition: 'all 0.3s ease',
                                    }}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-success btn-block mt-4"
                                style={{
                                    borderRadius: '30px',
                                    padding: '12px',
                                    fontSize: '1.1rem',
                                    backgroundColor: '#81C784',
                                    color: '#fff',
                                    transition: 'background-color 0.3s ease',
                                    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
                                }}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#66BB6A'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = '#81C784'}
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </motion.div>



            <Footer />
        </motion.div>
    );
}

export default Layout;
