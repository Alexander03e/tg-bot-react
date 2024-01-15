import styled from 'styled-components'

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

export const Main = () => {

  return <>
  <h2 style={{marginTop: '2em'}}>товары: </h2>
    <CardWrapper>
      
      {cards.map(card => {
        return <Card>товар {card}</Card>
      })}
    </CardWrapper>
  </>
}
