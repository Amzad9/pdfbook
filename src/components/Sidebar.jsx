// Sidebar Component
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../store/sidebarSlice';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);

  const menuItems = [
    { title: "About the Book", url: 'about' },
    { title: "Foreword from Chief Secretary, Government of Sindh", url:'forward' },
    { title: "Message from Secretary, Sindh Irrigation Department", url: 'message' },
    { title: "Message, Secretary, Sindh Agriculture Department", url: 'messagesindh' },
    { title: "Introduction", url: 'introduction' },
    { title: "Water Resources of Sindh Province", url: 'waterresources' },
    { title: "Climate Dynamics and their Impacts", url: 'climatedynamics' },
    { title: "Identification of the Practices: The Process" },
    { title: "Evaluation Location of the Practices" },
    { title: "Categorisation of the Practices" },
    { title: "Selected Best Practices" }
  ];

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => dispatch(toggleSidebar())}
        className="fixed top-4 left-4 z-50 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 md:hidden"
      >
        {!isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside 
        className={`
          fixed top-0 left-0 h-screen 
          md:sticky md:top-0 md:h-screen
          bg-blue-500 shadow-lg
          transition-all duration-300 ease-in-out 
          z-50 
          ${isOpen ? ' w-0 md:w-0 overflow-hidden' : 'w-[350px]'}
        `}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-blue-00">
            <h2 className="text-white font-semibold text-lg">Contents</h2>
            <button 
              className="md:hidden text-white"
              onClick={() => dispatch(toggleSidebar())}
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation */}
         <nav className="flex-1 bg-white overflow-y-auto sidebar-scroll scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-50">
  <ul className="py-2">
    {menuItems.map((item, index) => (
      <li key={index}>
        <Link
          to={item?.url}
          onClick={() => {
            console.log(`Navigating to: ${item.title}`);
            if (window.innerWidth < 768) {
              dispatch(toggleSidebar());
            }
          }}
          className="
            block w-full text-left
            px-4 py-3
            text-black hover:bg-blue-200
            transition-colors duration-200
            text-sm
            border-b border-blue-100
          "
        >
          {item.title}
        </Link>
      </li>
    ))}
  </ul>
</nav>

        </div>
      </aside>

      {/* Overlay for mobile */}
      {!isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => dispatch(toggleSidebar())}
        />
      )}
    </>
  );
};

export default Sidebar;