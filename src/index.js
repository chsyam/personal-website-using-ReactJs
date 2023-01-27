import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Projects from "./Components/Projects/Projects";
import Education from "./Components/Education/Education";
import Accomplishments from "./Components/Accomplishments/Accomplishments";
import Contact from "./Components/Contact/Contact";
import Skills from "./Components/Skills/Skills";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<App />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/accomplishments' element={<Accomplishments />} />
      <Route path='/education' element={<Education />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  </Router >
);

reportWebVitals();
