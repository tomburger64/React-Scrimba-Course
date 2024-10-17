import { useState } from 'react';
import './App.css';

// comps
import Header from './components/header';
import Meme from './components/meme'

export default function App() {
  return (
    <div className="container d-flex justify-content-center align-items-center flex-column">
      <Header />
      <Meme />
    </div>
  )
};