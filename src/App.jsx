
import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Foreword = lazy(() => import('./pages/Foreword'))
const Message = lazy(() => import('./pages/Message'))
const MessageSindh = lazy(() => import('./pages/MessageSindh'))
const Introduction = lazy(()=> import('./pages/Introduction'))
const WaterResources = lazy(() => import('./pages/WaterResources'))
const ClimateDynamics = lazy(() => import('./pages/ClimateDynamics'))
function App() {

  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='about' element={<About />} />
            <Route path='forward' element={<Foreword />} />
            <Route path='message' element={<Message />} />
            <Route path='messagesindh' element={<MessageSindh />} />
            <Route path='introduction' element={<Introduction />} />
            <Route path='waterresources' element={<WaterResources />} />
            <Route path='climatedynamics' element={<ClimateDynamics />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
    </>
  )
}

export default App
