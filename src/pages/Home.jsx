import React, { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar, openSidebar } from '../store/sidebarSlice';
import { ChevronLeft, ChevronRight, ArrowUp } from 'lucide-react';

function Home() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const hasScrolled = useRef(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled.current && !isOpen) {
        dispatch(openSidebar());
        hasScrolled.current = true;
      }
      // Show back to top button when scrolled down 200px
      setShowBackToTop(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch, isOpen]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative flex min-h-screen bg-gray-200">
      <Sidebar />
      <main
        className={`flex-1 relative transition-all duration-300 ${
          isOpen ? 'md:ml-[300px]' : 'md:ml-0'
        }`}
      >
        <button
          onClick={() => dispatch(toggleSidebar())}
          className={`absolute top-4 ${
            isOpen ? '-left-4' : 'left-0'
          } bg-white text-black p-1 rounded-full shadow-md z-50 hover:bg-gray-200 transition`}
          aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
        >
          {isOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
        </button>
        <div className="max-w-[1300px] mx-auto px-3 py-4">
          <Outlet />
        </div>
        <button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 p-3 rounded-full bg-white text-black shadow-md hover:bg-gray-200 transition-all duration-300 z-50 ${
            showBackToTop ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      </main>
    </div>
  );
}

export default Home;