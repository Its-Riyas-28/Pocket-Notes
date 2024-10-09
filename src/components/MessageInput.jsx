import React, { useState } from 'react'; 
import { IoSendSharp } from "react-icons/io5"; 

const MessageInput = ({ addNote }) => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (message.trim()) {
            addNote({
                text: message,
                date: new Date(), 
            });
            setMessage(''); 
        }
    };

    const iconColor = message.trim() ? '#001F8B' : '#CCCCCC';

    return (
        <div className="message-input">
            <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', alignItems: 'center', position: 'relative' }}>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your note..."
                    style={{ paddingRight: '40px', width: '100%' }} 
                />
                <span
                    onClick={handleSubmit}
                    style={{
                        position: 'absolute',
                        right: '60px',
                        top: '50%', 
                        transform: 'translateY(-50%)',
                        cursor: 'pointer',
                    }}
                >
                    <IoSendSharp
                        style={{
                            fontSize: '24px',
                            color: iconColor, 
                        }}
                    />
                </span>
            </form>
        </div>
    );
};

export default MessageInput;
