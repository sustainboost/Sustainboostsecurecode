import React, { useState } from 'react';
import axios from '../../utils/axiosConfig';

const Chat: React.FC = () => {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState<{ role: string; content: string }[]>([]);

    const sendMessage = async () => {
        if (!message.trim()) return;

        // Add user message to chat history
        setChatHistory((prev) => [...prev, { role: 'user', content: message }]);

        try {
            const response = await axios.post('/chat', { message });
            const reply = response.data.choices[0].message.content;

            // Add ChatGPT response to chat history
            setChatHistory((prev) => [...prev, { role: 'assistant', content: reply }]);
        } catch (error) {
            console.error('Error communicating with ChatGPT:', error);
            setChatHistory((prev) => [
                ...prev,
                { role: 'assistant', content: 'Failed to communicate with ChatGPT. Please try again.' },
            ]);
        }

        setMessage('');
    };

    return (
        <div>
            <div className="chat-box">
                {chatHistory.map((entry, index) => (
                    <div
                        key={index}
                        className={entry.role === 'user' ? 'user-message' : 'assistant-message'}
                    >
                        <strong>{entry.role}:</strong> {entry.content}
                    </div>
                ))}
            </div>
            <div className="input-box">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chat;
