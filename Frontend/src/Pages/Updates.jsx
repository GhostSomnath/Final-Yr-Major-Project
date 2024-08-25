import { useTheme } from '../context/themeContext'
import React, { useEffect, useState } from 'react';

function Updates() {
  const {theme}=useTheme();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/messages')
      .then(response => response.json())
      .then(data => {
        setMessages(data);
        setLoading(false);
      })
      .catch(error => {
        console.log('Error fetching messages:', error);
        setError('Failed to load messages');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className={"p-4 text-center text-gray-500 "+theme}>Loading...</div>;
  if (error) return <div className={"p-4 text-center text-red-500 "+theme}>{error}</div>;

  return (
    <div className={"p-8 bg-white shadow-md rounded-lg max-w-4xl mx-auto "+theme}>
      <h1 className="text-3xl font-bold text-sky-500 mb-6 text-center">Latest Updates</h1>
      <div className="space-y-6">
        {messages.length > 0 ? (
          messages.map(message => (
            <div key={message.id} className="p-6 border border-sky-200 rounded-lg bg-sky-50">
              <p className="text-gray-700 mb-2">{message.text}</p>
              <span className="text-gray-500 text-sm">{new Date(message.timestamp).toLocaleString()}</span>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">No messages available.</div>
        )}
      </div>
    </div>
  );
}

export default Updates;
