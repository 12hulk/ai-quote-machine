import React from "react";
import { motion } from "framer-motion";

function Header() {
    return (
        <motion.header
            className="bg-primary text-white text-center py-4"
            style={{
                background: 'linear-gradient(to right, #4CAF50, #81C784)',
                fontFamily: "'Poppins', sans-serif",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
            }}
            initial={{ opacity: 0, y: -50 }}  // Initial state (invisible, off-screen)
            animate={{ opacity: 1, y: 0 }}    // Final state (fully visible, on-screen)
            transition={{ duration: 1 }}      // Duration of the animation
        >
            <h1 style={{ fontSize: "3rem", fontWeight: "600" }}>AI Quote Machine</h1>
            <p style={{ fontSize: "1.2rem", marginTop: "10px" }}>Get yourself a qoute</p>
        </motion.header>
    );
}

export default Header;
