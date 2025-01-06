import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../store/sidebarSlice';
import { X, AlignJustify } from 'lucide-react';

function TopNavigation({ title }) {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();

  return (
    <nav className="flex bg-white py-4 px-4 shadow-lg">
      <button
        onClick={() => dispatch(toggleSidebar())}
        className="btn btn-primary flex items-center relative z-50"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X size={24} /> : <AlignJustify size={24} />}
      </button>
      <h1 className="ml-4 text-lg font-semibold">{title}</h1>
    </nav>
  );
}

export default TopNavigation;
