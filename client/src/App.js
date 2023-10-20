import React, { useState, useEffect } from 'react';
import { socket } from './socket';
import { ConnectionState } from './components/ConnectionState';
import { ConnectionManager } from './components/ConnectionManager';
import { Events } from "./components/Events";
import { MyForm } from './components/MyForm';
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { NotIndexPage } from './components/not_index_page';
import { IndexPage } from './components/indexPage';

export default function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);

  const [navUrl, setNavUrl] = useState('')
  
  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }



    socket.on('connected', onConnect);
    socket.on('disconnect', onDisconnect);


    return () => {
      socket.off('connected', onConnect);
      socket.off('disconnect', onDisconnect);
    };
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<IndexPage />}/> 
          <Route path='not_index_page' element={<NotIndexPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}