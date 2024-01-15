import styled from 'styled-components'
import { useParams, useNavigate } from "react-router-dom"

const CardDetailStyle = styled.div`
  border:1px solid black;
  width:100%;
  height:50vh;
  border-radius: 2em;
`
export const CardDetail = () => {
  const { itemid } = useParams()
  const back = '<'
  const navigate = useNavigate()
  return (
    <>
    <h1 onClick={() => navigate('/catalog')}>{back}</h1>
      <CardDetailStyle></CardDetailStyle>
      <h1>товар {itemid}</h1>
      <h2>описание: </h2>
      
    </>
  )
}