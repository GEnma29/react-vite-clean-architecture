// router 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// pages 
import MainPage from '~/pages/main.page'
import TestPage from '~/pages/test.page'

const MainRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/test' element={<TestPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default MainRoutes