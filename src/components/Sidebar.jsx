import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../store/sidebarSlice';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const menuItems = [
    { title: "About the Book", url: 'about' },
    { title: "Foreword from Chief Secretary, Government of Sindh", url: 'forward' },
    { title: "Message from Secretary, Sindh Irrigation Department", url: 'message' },
    { title: "Message, Secretary, Sindh Agriculture Department", url: 'messagesindh' },
    { title: "Introduction", url: 'introduction' },
    { title: "Water Resources of Sindh Province", url: 'waterresources' },
    { title: "Climate Dynamics and their Impacts", url: 'climatedynamics' },
    { title: "Identification of the Practices: The Process", url: 'identification' },
    { title: "Evaluation Location of the Practices", url: 'evaluation' },
    { title: "Categorisation of the Practices", url: 'categorisation' },
    {
      title: "Selected Best Practices",
      children: [
        { title: "Banana Residue Management", url: 'banana-residue-management' },
        { title: "Drainage Effluent for Raising Crops", url: 'drainage-effluent-crops' },
        { title: "Laser Land Levelling", url: 'laser-land-levelling' },
        { title: "Zero Tillage Practices", url: 'zero-tillage-practices' },
        { title: "Beneficial Use of Hill Torrents (Nai)", url: 'hill-torrents-beneficial' },
        { title: "Intercropping", url: 'intercropping' },
        { title: "Tunnel Farming", url: 'tunnel-farming' },
        { title: "Vegetables on Raised Beds", url: 'vegetables-raised-beds' },
        { title: "Orchard in Ring Basins", url: 'orchard-ring-basins' },
        { title: "Rainfed Agriculture", url: 'rainfed-agriculture' },
        { title: "Saline Aquaculture", url: 'saline-aquaculture' },
        { title: "Tankaa", url: 'tankaa' },
        { title: "Mobile Application based Remote Water Tank Monitoring", url: 'mobile-water-tank-monitoring' },
        { title: "Bed and Furrow Irrigation for Bananas", url: 'bed-furrow-irrigation-bananas' },
        { title: "Kund", url: 'kund' },
        { title: "The Great Wall of Surajpura", url: 'great-wall-surajpura' },
      ],
    },
  ];

  return (
    <>
      <button
        onClick={() => dispatch(toggleSidebar())}
        className="fixed top-4 left-4 z-50 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 md:hidden"
      >
        {!isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside
        className={`
          fixed top-0 left-0 h-screen 
          md:sticky md:top-0 md:h-screen
          bg-blue-500 shadow-lg
          transition-all duration-300 ease-in-out 
          z-50 
          ${isOpen ? 'w-0 md:w-0 overflow-hidden' : 'w-[350px]'}
        `}
      >
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between p-4 bg-blue-500">
            <h2 className="text-white font-semibold text-lg">Contents</h2>
            <button className="md:hidden text-white" onClick={() => dispatch(toggleSidebar())}>
              <X size={24} />
            </button>
          </div>

          <nav className="flex-1 bg-white overflow-y-auto sidebar-scroll scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-50">
            <ul className="py-2">
              {menuItems.map((item, index) => (
                <li key={index} className="relative">
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setDropdownOpen((prev) => !prev)}
                        className="flex items-center justify-between w-full px-4 py-3 text-left text-black hover:bg-blue-200 transition-colors duration-200 text-sm border-b border-blue-100"
                      >
                        {item.title}
                        {dropdownOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                      </button>
                      {dropdownOpen && (
                        <ul className=" bg-gray-50">
                          {item.children.map((child, idx) => (
                            <li key={idx}>
                              <Link
                                to={child.url}
                                className="block px-4 py-2 text-sm text-black hover:bg-blue-100"
                                onClick={() => {
                                  if (window.innerWidth < 768) {
                                    dispatch(toggleSidebar());
                                  }
                                }}
                              >
                                {child.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.url}
                      className="block w-full text-left px-4 py-3 text-black hover:bg-blue-200 transition-colors duration-200 text-sm border-b border-blue-100"
                      onClick={() => {
                        if (window.innerWidth < 768) {
                          dispatch(toggleSidebar());
                        }
                      }}
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      {!isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" onClick={() => dispatch(toggleSidebar())} />}
    </>
  );
};

export default Sidebar;
