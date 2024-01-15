import { useEffect, useState } from 'react'
const tg = window.Telegram.WebApp;
import { Header } from './components/Header/Header';
import { GlobalStyle } from './global-styles';
import { Main } from './components/Main/Main';
import styled from 'styled-components'
import './index.css'
function App() {

  useEffect(() => {
    tg.ready();
  }, [])

  

  const Container = styled.div`
    margin:0 auto;
    width:1200px;
  `

  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Main />
      
    </Container>
  )
}

export default App
