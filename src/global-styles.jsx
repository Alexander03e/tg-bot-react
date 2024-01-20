import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --basic-text-size: 15px;
    --middle-text-size: 25px;
    --large-text-size: 35px;
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
    color:#37352f;
    font-family: 'Arial';
    font-size: var(--large-text-size);
  }
  h2{
    color:#37352f;
    font-family: 'Arial';
    font-size: var(--middle-text-size);
  }
  body{
    padding:0;
    margin:0;
    background: rgb(217, 199, 152);
  }
  a{
    text-decoration:none;
  }
  .active{
    color:white!important;
  }
`