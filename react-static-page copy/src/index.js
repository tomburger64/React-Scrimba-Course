//react imports
import React from 'react';
import ReactDOM from 'react-dom/client';

//components
import Header from './components/Header.js';
import SectionOne from './components/SectionOne.js';
import Footer from './components/Footer.js';

//base css
import './index.css';



function App() {
  return (
    <div>
      <Header />
      <SectionOne />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);