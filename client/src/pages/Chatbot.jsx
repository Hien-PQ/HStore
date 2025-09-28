import
// React,
{ useState } from 'react';
import './Chatbot.css';

export default function Chatbot() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    async function sendMessage() {
        if (!input.trim()) return;
        const userMsg = { role: 'user', text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');

        try {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: input })
            });
            const data = await res.json();
            setMessages(prev => [...prev, { role: 'bot', text: data.reply }]);
        } catch (err) {
            console.error(err);
            setMessages(prev => [...prev, { role: 'bot', text: 'Welcome to the HStore Chat Box!' }]);
        }
    }

    return (
        <div className="chatbot mx-auto my-48 p-4 border border-gray-300 rounded shadow-md flex flex-col">
            <div className="chat-window border border-gray-300 rounded p-4 mb-4 h-96 overflow-y-auto">
                {messages.map((m, i) => (
                    <div key={i} className={`msg ${m.role}`}>{m.text}</div>
                ))}
            </div>
            <div className="input-area">
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && sendMessage()}
                    className='flex-grow p-2 border border-gray-300 rounded'
                    placeholder="Ask me..."
                />
                <button
                    className='bg-gray-50 hover:bg-gray-100 rounded p-2 rounded-full border border-gray-200'
                    onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}
