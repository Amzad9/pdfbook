
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
const Dashbpard = lazy(()=> import('./pages/Dashboard'));
const Identification = lazy(() => import('./pages/Identification'));
const Evaluation = lazy(() => import('./pages/Evaluation'))
const Categorisation = lazy(() => import('./pages/Categorisation'))
const BananaResidue = lazy(() => import('./pages/BananaResidue'))
function App() {

  return (
    <>
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home />}>
            <Route 
            path='/' 
            element={<Suspense fallback={<Loader />}><Dashbpard /></Suspense>} 
          />
          <Route 
            path='about' 
            element={<Suspense fallback={<Loader />}><About /></Suspense>} 
          />
          <Route 
            path='forward' 
            element={<Suspense fallback={<Loader />}><Foreword /></Suspense>} 
          />
          <Route 
            path='message' 
            element={<Suspense fallback={<Loader />}><Message /></Suspense>} 
          />
          <Route 
            path='messagesindh' 
            element={<Suspense fallback={<Loader />}><MessageSindh /></Suspense>} 
          />
          <Route 
            path='introduction' 
            element={<Suspense fallback={<Loader />}><Introduction /></Suspense>} 
          />
          <Route 
            path='waterresources' 
            element={<Suspense fallback={<Loader />}><WaterResources /></Suspense>} 
          />
          <Route 
            path='climatedynamics' 
            element={<Suspense fallback={<Loader />}><ClimateDynamics /></Suspense>} 
          />
         <Route 
            path='identification' 
            element={<Suspense fallback={<Loader />}><Identification /></Suspense>} 
          />
          <Route 
            path='evaluation' 
            element={<Suspense fallback={<Loader />}><Evaluation /></Suspense>} 
          />
          <Route 
            path='categorisation' 
            element={<Suspense fallback={<Loader />}><Categorisation /></Suspense>} 
          />
         <Route 
            path='banana-residue-management' 
            element={<Suspense fallback={<Loader />}><BananaResidue /></Suspense>} 
          />
        </Route>
      </Routes> 
      </BrowserRouter>
    </Suspense>
    </>
  )
}

export default App
