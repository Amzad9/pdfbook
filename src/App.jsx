import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Loader from './components/Loader';

const Home = lazy(() => import('./pages/Home'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const About = lazy(() => import('./pages/About'));
const Foreword = lazy(() => import('./pages/Foreword'));
const Message = lazy(() => import('./pages/Message'));
const MessageSindh = lazy(() => import('./pages/MessageSindh'));
const Introduction = lazy(() => import('./pages/Introduction'));
const WaterResources = lazy(() => import('./pages/WaterResources'));
const ClimateDynamics = lazy(() => import('./pages/ClimateDynamics'));
const Identification = lazy(() => import('./pages/Identification'));
const Evaluation = lazy(() => import('./pages/Evaluation'));
const Categorisation = lazy(() => import('./pages/Categorisation'));
const BananaResidue = lazy(() => import('./pages/BananaResidue'));
const Drainage = lazy(() => import('./pages/Drainage'));
const LaserLand = lazy(() => import('./pages/LaserLand'));
const ZeroTillage = lazy(() => import('./pages/ZeroTillage'));
const Beneficial = lazy(() => import('./pages/Beneficial'));
const Intercropping = lazy(() => import('./pages/Intercropping'));
const Tunnel = lazy(() => import('./pages/Tunnel'));
const Vegetables = lazy(() => import('./pages/Vegetables'));
const Orchard = lazy(() => import('./pages/Orchard'));
const Rainfed = lazy(() => import('./pages/Rainfed'));
const Saline = lazy(() => import('./pages/Saline'));
const Tankaa = lazy(() => import('./pages/Tankaa'));
const MobileApplication = lazy(() => import('./pages/MobileApplication'));
const BedandFurrow = lazy(() => import('./pages/BedandFurrow'));
const Kund = lazy(() => import('./pages/Kund'));
const TheGreatWall = lazy(() => import('./pages/TheGreatWall'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Suspense fallback={<Loader />}><Dashboard /></Suspense>} />
            <Route path="about" element={<Suspense fallback={<Loader />}><About /></Suspense>} />
            <Route path="forward" element={<Suspense fallback={<Loader />}><Foreword /></Suspense>} />
            <Route path="message" element={<Suspense fallback={<Loader />}><Message /></Suspense>} />
            <Route path="messagesindh" element={<Suspense fallback={<Loader />}><MessageSindh /></Suspense>} />
            <Route path="introduction" element={<Suspense fallback={<Loader />}><Introduction /></Suspense>} />
            <Route path="waterresources" element={<Suspense fallback={<Loader />}><WaterResources /></Suspense>} />
            <Route path="climatedynamics" element={<Suspense fallback={<Loader />}><ClimateDynamics /></Suspense>} />
            <Route path="identification" element={<Suspense fallback={<Loader />}><Identification /></Suspense>} />
            <Route path="evaluation" element={<Suspense fallback={<Loader />}><Evaluation /></Suspense>} />
            <Route path="categorisation" element={<Suspense fallback={<Loader />}><Categorisation /></Suspense>} />
            <Route path="banana-residue-management" element={<Suspense fallback={<Loader />}><BananaResidue /></Suspense>} />
            <Route path="drainage-effluent-crops" element={<Suspense fallback={<Loader />}><Drainage /></Suspense>} />
            <Route path="laser-land-levelling" element={<Suspense fallback={<Loader />}><LaserLand /></Suspense>} />
            <Route path="zero-tillage-practices" element={<Suspense fallback={<Loader />}><ZeroTillage /></Suspense>} />
            <Route path="hill-torrents-beneficial" element={<Suspense fallback={<Loader />}><Beneficial /></Suspense>} />
            <Route path="intercropping" element={<Suspense fallback={<Loader />}><Intercropping /></Suspense>} />
            <Route path="tunnel-farming" element={<Suspense fallback={<Loader />}><Tunnel /></Suspense>} />
            <Route path="vegetables-raised-beds" element={<Suspense fallback={<Loader />}><Vegetables /></Suspense>} />
            <Route path="orchard-ring-basins" element={<Suspense fallback={<Loader />}><Orchard /></Suspense>} />
            <Route path="rainfed-agriculture" element={<Suspense fallback={<Loader />}><Rainfed /></Suspense>} />
            <Route path="saline-aquaculture" element={<Suspense fallback={<Loader />}><Saline /></Suspense>} />
            <Route path="tankaa" element={<Suspense fallback={<Loader />}><Tankaa /></Suspense>} />
            <Route path="mobile-water-tank-monitoring" element={<Suspense fallback={<Loader />}><MobileApplication /></Suspense>} />
            <Route path="bed-furrow-irrigation-bananas" element={<Suspense fallback={<Loader />}><BedandFurrow /></Suspense>} />
            <Route path="kund" element={<Suspense fallback={<Loader />}><Kund /></Suspense>} />
            <Route path="great-wall-surajpura" element={<Suspense fallback={<Loader />}><TheGreatWall /></Suspense>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;