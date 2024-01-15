import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const HeaderStyled = styled.div`
  display: flex;
  flex-direction:row;
  gap:1.5em;
  justify-content:space-between;
  padding: 0.2em 0.7em 0.5em 0.7em;
  background-color: #37352f;
  align-items: center;
  // padding:1px;
  h2{
    color: #feddd0;
  }
`

const CloseButton = styled.button`
  background-color:transparent;
  font-weight: bold;
  border: none;
  height:2em;
`

const onClose = () => {
  tg.close()
}

export const Header = () => {

  return (
    <HeaderStyled>
      <NavLink to='/catalog'><h2>каталог</h2></NavLink>
      <NavLink to='/arrive'><h2>доставка</h2></NavLink>
      <NavLink to='/pay'><h2>оплата</h2></NavLink>
      {/* <p style={{cursor:'pointer'}} onClick={onClose}>закрыть окно</p> */}
      {/* <CloseButton onClick={onClose}>Закрыть</CloseButton> */}
    </HeaderStyled>
  )
}