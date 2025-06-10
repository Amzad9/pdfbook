import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../store/sidebarSlice';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Home() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);

  return (
    <div className="relative flex min-h-screen bg-gray-200">
      <Sidebar />

      <main className="flex-1 h-screen overflow-hidden relative">
        <button
          onClick={() => dispatch(toggleSidebar())}
          className="absolute top-4 -left-2  bg-white text-black p-1 rounded-full shadow-md z-50 hover:bg-gray-200 transition"
        >
          {isOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
        </button>
        <div className="max-w-[1300px] mx-auto px-3 py-4 h-full overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Home;
