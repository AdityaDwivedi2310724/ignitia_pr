import React from 'react';
import './App.css';
import Banner from './Banner';
import Mid from './Mid';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="App">
      <Mid />
      <Banner />
    </div>
  );
}

export default App;
