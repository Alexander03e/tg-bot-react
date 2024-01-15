import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --basic-text-size: 1em;
    --middle-text-size: 2.7em;
    --large-text-size: 4em;
  }
  p{
    font-family: 'Arial';
    color:#37352f;
    font-weight:bold;
    transition: 0.10s;
    font-size: var(--basic-text-size);
    padding:0;
    margin:0;
    &:hover{
      color: #9cca86;
    }
  }
  h1{
    color:white;
    font-family: 'Arial';
    font-size: var(--large-text-size);
  }
  h2{
    color:white;
    font-family: 'Arial';
    font-size: var(--middle-text-size);
  }
  body{
    background: #f7d4c6;
  }
  a{
    text-decoration:none;
  }
  .active{
    color:white!important;
  }
`