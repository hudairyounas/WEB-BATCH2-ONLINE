import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import './App.css'

// Create socket instance once, outside the component
const socket = io('http://localhost:5000')

function App() {
  const [isConnected, setIsConnected] = useState(false)
  const [socketId, setSocketId] = useState('')

  useEffect(() => {
    // Handle connect
    socket.on("connect", () => {
      setIsConnected(true);
      setSocketId(socket.id);
      console.log("Connected to server:", socket.id);
    });

    // Handle disconnect
    socket.on("disconnect", () => {
      setIsConnected(false);
      setSocketId("");
      console.log("Disconnected from server");
    });
    // Cleanup listeners on unmount
    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, [])


  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Socket.IO Demo</h1>

      <p>
        Status:{' '}
        <strong style={{ color: isConnected ? 'green' : 'red' }}>
          {isConnected ? '🟢 Connected' : '🔴 Disconnected'}
        </strong>
      </p>

      {isConnected && (
        <p>Socket ID: <code>{socketId}</code></p>
      )}
    </div>
  )
}

export default App
