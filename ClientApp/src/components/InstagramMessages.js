import React, { useEffect, useState } from 'react';
import { getRecentMedia } from '../Services/InstagramService';
import * as signalR from '@microsoft/signalr';

function InstagramMessages() {
  const [messages, setMessages] = useState([]);
  const [connection, setConnection] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const recentMedia = await getRecentMedia();
      setMessages(recentMedia);
    }

    fetchData();
  }, []);

  useEffect(() => {
    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl('/instagramhub')
      .withAutomaticReconnect()
      .build();

    setConnection(newConnection);
  }, []);

  useEffect(() => {
    if (connection) {
      connection.start()
        .then(() => console.log('Connection started!'))
        .catch((err) => console.log('Error while establishing the connection:', err));

      connection.on('ReceiveMessage', (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });
    }

    return () => {
      if (connection) {
        connection.stop();
      }
    };
  }, [connection]);

  return (
    <div>
      <h1>Instagram Messages</h1>
      <ul>
        {messages.map((msg) => (
          <li key={msg.id}>{msg.caption}</li>
        ))}
      </ul>
    </div>
  );
}

export default InstagramMessages;
