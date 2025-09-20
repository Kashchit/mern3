import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Test from './Test'
import UseState from './UseState'
import LearningUseEffect from './UseEffect'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/test' element={<Test/>} />
        <Route path='/use-State' element={<UseState/>}/>
        <Route path='/use-Effect' element={<LearningUseEffect/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
