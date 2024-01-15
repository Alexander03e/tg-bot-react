import { useRoutes} from 'react-router-dom'
import { Main } from '../components/Main/Main'
import { CardDetail } from '../components/Card/CardDetail'


export const MainRoutes = () => {
  
  const basedPath = [
    {path: '/', element: <Main />},
    {path: '/:itemid', element: <CardDetail />}
  ]
  
  return useRoutes(basedPath)
}