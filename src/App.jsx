import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/LandingPage'
import RegisterPage from './Pages/RegisterPage'
import AllStudents from './Pages/AllStudents'
import Header from './Components/Header'




function App() {

  return (
    <>
    <Header></Header>
     <Routes>
        <Route path={'/'} element={<LandingPage></LandingPage>}></Route>
        <Route path={'/register'} element={<RegisterPage></RegisterPage>}></Route>
        <Route path={'/allstudents'} element={<AllStudents></AllStudents>}></Route>
        <Route path={'/*'} element={<Navigate to={'/'}></Navigate>}></Route>
        

      

     </Routes>
    </>
  )
}

export default App
