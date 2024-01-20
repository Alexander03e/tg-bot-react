import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import React from 'react'
import axios from 'axios'

const CardWrapper = styled.div`

  display:grid;
  margin-top: 1em;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
`
const Card = styled.div`
  display:flex;
  flex-direction: column;
  height:5em;
  border: 1px solid black;
  border-radius: 1em;
  padding:1em;
`

const cards = [1,2,3,4,5,6,7,8,9]

export const Catalog = () => {
  const [messages, setMessages] = React.useState('')
  // React.useEffect(() => {
  //   axios
  //     .get('https://api.telegram.org/bot6704423003:AAHKIJNXXs9_Nk0FvQIv_SvLTBVqdQadQMw/getUpdates')
  //     .then(res => setMessages(res))
  // }, [])
  return <>
  <h2>товары: </h2>
      <h1>{messages ? messages: ''}</h1>
    <CardWrapper>
      {cards.map(card => {
        return <NavLink to={`/catalog/${card}`}><Card><p>товар {card}</p></Card></NavLink>
      })}
    </CardWrapper>
  </>
}
