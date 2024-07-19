

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Works from './pages/Works'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element ={<Home/>} />
        <Route path='/work' element = {<Works/>} />
      </Routes>
    <Footer/>
    </>
  )
}

export default App
