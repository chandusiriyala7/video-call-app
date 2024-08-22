import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Make sure to import the CSS file

const HomePage = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (input.trim()) {
            navigate(`/room/${input}`);
        }
    }

    return (
        <div className="homepage-container">
            <div className="logo">VibeLive by chandusiiryala</div>
            <div className="input-container">
                <input
                    type="text"
                    name="name"
                    value={input}
                    placeholder="Enter Your Name ......."
                    onChange={(e) => setInput(e.target.value)}
                    className="input-field"
                />
                <button onClick={handleSubmit} className="submit-button">Join Room</button>
            </div>
        </div>
    );
}

export default HomePage;
