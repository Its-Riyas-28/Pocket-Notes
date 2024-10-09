import React from 'react';
import './FrontPage.css';

const FrontPage = () => {
    return (
        <div className="front-page">
            <img src="/images/image-removebg-preview 1.png" alt="Notebook and people" className="front-image" />
            <div className="text-container">
                <h1>Pocket Notes</h1>
                <p>Send and receive messages without keeping your phone online.</p>
                <p>Use Pocket Notes on up to 4 linked devices and 1 mobile phone.</p>
                <p className="encrypted-text">
                    <img src="/images/Vector.png" alt="Lock Icon" className="lock-icon" />
                    end-to-end encrypted
                </p>
            </div>
        </div>
    );
};

export default FrontPage;
