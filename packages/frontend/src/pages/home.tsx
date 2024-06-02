// src/pages/Chat.jsx
import { useState } from 'react';
import { Card, Input, Button, Avatar } from 'antd';

const { TextArea } = Input;

const Chat = () => {
  const [messages, setMessages] = useState([
    { text: "Oe mz", sender: 'u' },
    { text: "Oe tori", sender: 'u' }
  ]);
  const [message, setMessage] = useState('');
  const [replyTo, setReplyTo] = useState(null);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: 'me' }]);
      setMessage('');
      setReplyTo(null);
    }
  };

  const handleReply = (index) => {
    const textToReply = messages[index].text;
    setReplyTo(textToReply);
    setMessage();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-3xl p-4 shadow-md">
        {replyTo && (
          <div className="mb-4 p-2 bg-gray-300 rounded-lg">
            <p className="font-bold">Replying to:</p>
            <p>{replyTo}</p>
          </div>
        )}
        <div className="flex flex-col space-y-4 mb-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-start space-x-4 ${msg.sender === 'me' ? 'justify-end' : ''}`}
            >
              {msg.sender !== 'me' && (
                <Avatar className="bg-blue-500" size="large">
                  U
                </Avatar>
              )}
              <div className={`p-2 ${msg.sender === 'me' ? 'bg-blue-100' : 'bg-gray-200'} rounded-lg`}>
                <p>{msg.text}</p>
                {msg.sender !== 'me' && (
                  <Button
                    type="link"
                    onClick={() => handleReply(index)}
                    className="text-blue-500 text-xs"
                  >
                    Reply
                  </Button>
                )}
              </div>
              {msg.sender === 'me' && (
                <Avatar className="bg-green-500" size="large">
                  Me
                </Avatar>
              )}
            </div>
          ))}
        </div>
        <div className="flex space-x-2">
          <TextArea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={1}
            className="flex-grow"
            placeholder="Type your message..."
          />
          <Button type="primary" onClick={handleSendMessage}>
            Send
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Chat;
