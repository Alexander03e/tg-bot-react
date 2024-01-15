import { useRoutes} from 'react-router-dom'
import { Catalog } from '../components/Catalog/Catalog'
import { CardDetail } from '../components/Card/CardDetail'
import { Arrive } from '../pages/Arrive'
import { About } from '../pages/About'
import { Main } from '../pages/Main'


export const MainRoutes = () => {
  
  const basedPath = [
    {path: '/', element: <Catalog />},
    {path: '/catalog', element: <Catalog />},
    {path: '/catalog/:itemid', element: <CardDetail />},
    {path: '/arrive', element: <Arrive />},
    {path: '/about', element: <About />}
  ]
  
  return useRoutes(basedPath)
}