// TopNavigation Component
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../store/sidebarSlice';
import { X, AlignJustify } from 'lucide-react';

function TopNavigation() {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();

  return (
      <button
        onClick={() => dispatch(toggleSidebar())}
        className="flex items-center absolute top-3 -right-10 z-50  bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X size={24} /> : <AlignJustify size={24} />}
      </button>
  );
}

export default TopNavigation;