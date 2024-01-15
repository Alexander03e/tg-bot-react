import { useEffect, useState } from 'react'
const tg = window.Telegram.WebApp;
import { Header } from './components/Header/Header';
import { GlobalStyle } from './global-styles';
import styled from 'styled-components'
import './index.css'
import { MainRoutes } from './routes/MainRoutes';

function App() {

  useEffect(() => {
    tg.ready();
  }, [])

  

  const Container = styled.div`
    margin:0 auto;
    width:90vw;
  `

  return (
    <>
    <GlobalStyle />
    <Header />
    <Container>
      <MainRoutes />
    </Container>
    </>
  )
}

export default App
