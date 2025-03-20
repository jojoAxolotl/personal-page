import { useState, useEffect } from "react";

export default function PersonalPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    setVisitorCount(prev => prev + 1);
  }, []);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, message]);
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="max-w-2xl bg-white shadow-lg rounded-lg p-6">
        <img src="/profile.jpg" alt="Profile" className="w-32 h-32 rounded-full mx-auto" />
        <h1 className="text-2xl font-bold text-center mt-4">Hi, I'm Wen Tzu Chang! (貓貓)</h1>
        <p className="text-center mt-2">I am passionate about AI, Computer Vision, and Edge Computing. Welcome to my page!</p>
        
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Message Board</h2>
          <div className="mt-2 flex">
            <input 
              type="text" 
              className="border p-2 w-full rounded" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Leave a message..."
            />
            <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSendMessage}>Send</button>
          </div>
          <ul className="mt-4">
            {messages.map((msg, index) => (
              <li key={index} className="bg-gray-200 p-2 mt-1 rounded">{msg}</li>
            ))}
          </ul>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-lg font-semibold">Visitor Count: {visitorCount}</p>
        </div>
      </div>
    </div>
  );
}
