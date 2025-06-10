import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../store/sidebarSlice';
import { ChevronRight, ChevronDown } from 'lucide-react';

const Sidebar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => !state.sidebar.isOpen);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  const menuItems = [
    { title: "Home", url: '/' },
    { title: "About the Book", url: '#Page4' },
    { title: "Message, Secretary, Sindh Irrigation Department", url: '#Page5' },
    // { title: "Message, Secretary, Sindh Agriculture Department", url: '#Page5' },
    { title: "Introduction", url: '#Page6' },
    { title: "Water Resources of Sindh Province", url: '#Page7' },
    { title: "Climate Dynamics and their Impacts", url: '#Page8' },
    // { title: "Identification of the Practices: The Process", url: '#Page8' },
    { title: "Evaluation Location of the Practices", url: '#Page9' },
    // { title: "Categorisation of the Practices", url: '#Page9' },
    {
      title: "Selected Best Practices",
      children: [
        { title: "Laser Land Levelling", url: '#Page11' },
        { title: "Zero Tillage Practices", url: '#Page13' },
        { title: "Vegetables on Raised Beds", url: '#Page15' },
        { title: "Bed and Furrow Irrigation for Bananas", url: '#Page17' },
        { title: "Orchard in Ring Basins", url: '#Page19' },
        { title: "Intercropping", url: '#Page21' },
        { title: "Tunnel Farming", url: '#Page23' },
        { title: "Drainage effluent for raising crops", url: '#Page25' },
        { title: "Residue Management of Banana", url: '#Page27' },
        { title: "Hill Torrent Management", url: '#Page30' },
        { title: "Dryland Agriculture", url: '#Page32' },
        { title: "Tankaa", url: '#Page34' },
        { title: "The Great Wall of Surajpura", url: '#Page36' },
        { title: "Promotion of Saline Aquaculture", url: '#Page37' },
        { title: "Urban Water Management System", url: '#Page39' },
      ],
    },
    { title: "Acknowledgement", url: '#Page42' },
    { title: "Know More (References)", url: '#Page43' },
    { title: "Glossary of Terms", url: '#Page44' },
  ];

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`
          relative top-0 left-0 z-30
          bg-blue-500 shadow-lg transition-all duration-300 ease-in-out overflow-auto
          ${isOpen ? 'translate-x-[-100%] w-[0px]' : 'translate-x-0 w-[300px]'}
          h-screen mt-14 md:mt-0
        `}
      >
        {/* Sidebar Content */}
        <div className="flex flex-col h-full relative">

          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 bg-blue-500 relative z-10">
            <h2 className="text-white font-semibold text-lg">WATER WISDOM</h2>
          </div>

          {/* Sidebar Menu */}
          <nav className="flex-1 overflow-y-auto bg-white scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-100 relative z-0">
            <ul className="py-2">
              {menuItems.map((item, index) => (
                <li key={index} className="relative">
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setDropdownOpen((prev) => !prev)}
                        className="flex items-center justify-between w-full px-4 py-3 text-left text-black font-semibold hover:bg-blue-200 text-sm border-b border-blue-100"
                      >
                        {item.title}
                        {dropdownOpen ? (
                          <ChevronDown size={16} />
                        ) : (
                          <ChevronRight size={16} />
                        )}
                      </button>
                      {dropdownOpen && (
                        <ul className="bg-gray-50 border-l border-blue-200">
                          {item.children.map((child, idx) => (
                            <li key={idx}>
                              <a
                                href={child.url}
                                className={`block px-6 py-2 text-sm border-b border-blue-100 ${
                                  activeItem === child.url
                                    ? 'bg-blue-300 font-bold text-white'
                                    : 'text-black hover:bg-blue-100'
                                }`}
                                onClick={() => {
                                  setActiveItem(child.url);
                                  if (window.innerWidth < 768) {
                                    dispatch(toggleSidebar());
                                  }
                                }}
                              >
                                {child.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.url}
                      className={`block w-full text-left px-4 py-3 text-sm border-b border-blue-100 ${
                        activeItem === item.url
                          ? 'bg-blue-300 font-bold text-white'
                          : 'text-black hover:bg-blue-200'
                      }`}
                      onClick={() => {
                        setActiveItem(item.url);
                        if (window.innerWidth < 768) {
                          dispatch(toggleSidebar());
                        }
                      }}
                    >
                      {item.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Sidebar Overlay for mobile */}
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
