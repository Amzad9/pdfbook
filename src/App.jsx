
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='/aboutthebook' element={<About />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
