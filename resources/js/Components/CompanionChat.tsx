import React, { useState } from 'react';
import axios from 'axios';
import '@/Styles/comp.css'

const CompanionChat: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState<{ role: string; content: string }[]>([]);

    const sendMessage = async () => {
        if (!message.trim()) return;

        // Ajouter le message utilisateur à l'historique
        const updatedHistory = [...chatHistory, { role: 'user', content: message }];
        setChatHistory(updatedHistory);

        try {
            const response = await axios.post('/api/companion/chat', {
                messages: updatedHistory, // Historique complet
            });

            // Récupérer la réponse de l'assistant
            const reply = response.data.choices[0].message.content;

            // Ajouter la réponse à l'historique
            setChatHistory((prev) => [...prev, { role: 'assistant', content: reply }]);
        } catch (error) {
            console.error('Erreur API :', error);
            setChatHistory((prev) => [
                ...prev,
                { role: 'assistant', content: 'Désolé, une erreur est survenue.' },
            ]);
        }

        setMessage('');
    };

    return (
        <div>
            <button
                className="companion-button"
                onClick={() => setIsOpen(!isOpen)}
            >
                Compagnon
            </button>

            {isOpen && (
                <div className="companion-chat">
                    <div className="chat-header">
                        <h2>Compagnon</h2>
                        <button onClick={() => setIsOpen(false)}>X</button>
                    </div>
                    <div className="chat-body">
                        {chatHistory.map((entry, index) => (
                            <div key={index} className={`chat-message ${entry.role}`}>
                                <strong>{entry.role === 'user' ? 'Vous' : 'Compagnon'}:</strong> {entry.content}
                            </div>
                        ))}
                    </div>
                    <div className="chat-footer">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Écrivez votre message..."
                        />
                        <button onClick={sendMessage}>Envoyer</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CompanionChat;
