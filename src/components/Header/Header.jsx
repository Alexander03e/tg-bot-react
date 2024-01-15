import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const HeaderStyled = styled.div`
  display: flex;
  flex-direction:row;
  gap:1.5em;
  background-color: #37352f;
  align-items: center;
  // padding:1px;
  p{
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
      <NavLink to='/catalog'><p>каталог</p></NavLink>
      <NavLink to='/arrive'><p>доставка</p></NavLink>
      <NavLink to='/pay'><p>оплата</p></NavLink>
      <p style={{cursor:'pointer'}} onClick={onClose}>закрыть окно</p>
      {/* <CloseButton onClick={onClose}>Закрыть</CloseButton> */}
    </HeaderStyled>
  )
}