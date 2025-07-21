import { lazy, Suspense , useEffect} from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Loader from './components/Loader';

const Home = lazy(() => import('./pages/Home'));
const Dashboard = lazy(() => import('./pages/Dashboard'));


function App() {
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.history.scrollRestoration = 'manual'; // Disable browser scroll restoration
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [pathname]);

  return null;
}
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
     <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Suspense fallback={<Loader />}><Dashboard /></Suspense>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;