import { useState } from 'react';
import './App.css';

// comps
import Header from './components/header';
import MemeGen from './components/meme'

export default function App() {
  return (
    <div className="container d-flex justify-content-center align-items-center flex-column">
      <Header />
      <MemeGen />
    </div>
  )
};