import { useEffect, useState } from 'react'
const tg = window.Telegram.WebApp;

import './App.css'

function App() {

  useEffect(() => {
    tg.ready();
  }, [])

  const onClose = () => {
    tg.close()
  }

  return (
    <>
      hello

      <button onClick={onClose}></button>
    </>
  )
}

export default App
