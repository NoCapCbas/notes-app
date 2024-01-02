import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

function App() {

  const [currentUser, setCurrentUser] = useState();
  const [message, setMessage] = useState('');

  useEffect(() => {
    client.get("/api/hello")
    .then(function(res) {
      setMessage(res.data.message);
    })
    .catch(function(error) {
      setMessage('Error');
    });
  }, []);

  return (
    <div className="App">
      <header className="App-hedaer">
        <p>{message}</p>
      </header>
    </div>
  );

}

export default App;
