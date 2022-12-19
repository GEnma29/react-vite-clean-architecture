// router 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// pages 
import MainPage from '~/pages/main.page'
import TestPage from '~/pages/test.page'
import { PublicRoutes} from '~/routers/routers'
const MainRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='*' element={<h1>404</h1>} />
        <Route path={PublicRoutes.Test} element={<TestPage />} />
        <Route path={PublicRoutes.Main} element={<MainPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default MainRoutes