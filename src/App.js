import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Context from './components/Context';

function App() {
  return (
    <div className='app'>
      <Header />
      <Nav />
      <Context />
    </div>
  );
}

export default App;
