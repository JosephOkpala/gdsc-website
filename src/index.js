import React from 'react';
// import './../node_modules/font-awesome/css/font-awesome.min.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import Teams from './Pages/Teams';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';
import Event from './Pages/Event';
import Error from './Pages/Error';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/event" element={<Event />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
