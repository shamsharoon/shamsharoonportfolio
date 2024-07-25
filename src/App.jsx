import './App.css'
import React from 'react'
import Header from './components/header/Header'
import Home from './components/home/Home'

// TODO: Fix the x on mobile nav so it shows in the bottom middle or top right corner of the card

function App() {

  return (
    <>
      <Header />
      
      <main className="main">
        <Home />
      </main>
      
    </>
  )
}

export default App
