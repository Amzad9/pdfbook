
import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Loader from './components/Loader'
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
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home />}>
          <Route 
            path='about' 
            element={<Suspense fallback={<Loader />}><About /></Suspense>} 
          />
          <Route 
            path='forward' 
            element={<Suspense fallback={<div>Loading...</div>}><Foreword /></Suspense>} 
          />
          <Route 
            path='message' 
            element={<Suspense fallback={<div>Loading...</div>}><Message /></Suspense>} 
          />
          <Route 
            path='messagesindh' 
            element={<Suspense fallback={<div>Loading...</div>}><MessageSindh /></Suspense>} 
          />
          <Route 
            path='introduction' 
            element={<Suspense fallback={<div>Loading...</div>}><Introduction /></Suspense>} 
          />
          <Route 
            path='waterresources' 
            element={<Suspense fallback={<div>Loading...</div>}><WaterResources /></Suspense>} 
          />
          <Route 
            path='climatedynamics' 
            element={<Suspense fallback={<div>Loading...</div>}><ClimateDynamics /></Suspense>} 
          />
        </Route>
      </Routes> 
      </BrowserRouter>
    </Suspense>
    </>
  )
}

export default App
