import React from "react";

const Chat: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="flex-1 overflow-y-auto p-5">
        <h1 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Chat with Astrobot AI</h1>
        <div className="space-y-4">
          {/* Example messages */}
          <div className="flex justify-start">
            <div className="bg-gray-800 rounded-lg p-3 max-w-3/4">
              <p className="text-sm">Hello! How can I assist you today?</p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-blue-600 rounded-lg p-3 max-w-3/4">
              <p className="text-sm">Hi! I'd like to know more about exoplanets.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 border-t border-gray-700" style={{ position: 'fixed', left: 0, bottom: 0, width: '100%' }}>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors duration-300">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
