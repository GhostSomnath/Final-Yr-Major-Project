import React, { useEffect, useState } from 'react';

function Updates() {
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
        console.error('Error fetching messages:', error);
        setError('Failed to load messages');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Latest Updates</h1>
      <div className="space-y-4">
        {messages.map(message => (
          <div key={message.id} className="p-4 border border-gray-300 rounded-lg">
            <p className="text-gray-700">{message.text}</p>
            <span className="text-gray-500 text-sm">{new Date(message.timestamp).toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Updates;
