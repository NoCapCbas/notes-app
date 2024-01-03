import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Cards from './components/Cards';
import Analytics from './components/Analytics';
import Newsletter from './components/Newsletter';



axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

function App() {

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
    <div>
      <Navbar />
      <LandingPage /> 
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );

};

export default App;
