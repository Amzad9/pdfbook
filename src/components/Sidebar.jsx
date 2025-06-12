import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../store/sidebarSlice';
import { ChevronRight, ChevronLeft, ChevronDown } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');
  const location = useLocation();
  const isDashboard = location.pathname === '/';

  const menuItems = [
    { title: 'Home', url: 'Page0', route: '/' },
    { title: 'About the Book', url: 'Page4', route: '/about' },
    { title: 'Message, Secretary, Sindh Irrigation Department', url: 'Page5', route: '/messagesindh' },
    { title: 'Introduction', url: 'Page6', route: '/introduction' },
    { title: 'Water Resources of Sindh Province', url: 'Page7', route: '/waterresources' },
    { title: 'Climate Dynamics and their Impacts', url: 'Page8', route: '/climatedynamics' },
    { title: 'Evaluation Location of the Practices', url: 'Page9', route: '/evaluation' },
    {
      title: 'Selected Best Practices',
      children: [
        { title: '1. Laser Land Levelling', url: 'Page11', route: 'laser-land-levelling' },
        { title: '2. Zero Tillage Practices', url: 'Page13', route: 'zero-tillage-practices' },
        { title: '3. Vegetables on Raised Beds', url: 'Page15', route: 'vegetables-raised-beds' },
        { title: '4. Bed and Furrow Irrigation for Bananas', url: 'Page17', route: 'bed-furrow-irrigation-bananas' },
        { title: '5. Orchard in Ring Basins', url: 'Page19', route: 'orchard-ring-basins' },
        { title: '6. Intercropping', url: 'Page21', route: 'intercropping' },
        { title: '7. Tunnel Farming', url: 'Page23', route: 'tunnel-farming' },
        { title: '8. Drainage effluent for raising crops', url: 'Page25', route: 'drainage-effluent-crops' },
        { title: '9. Residue Management of Banana', url: 'Page27', route: 'banana-residue-management' },
        { title: '10. Hill Torrent Management', url: 'Page30', route: 'hill-torrents-beneficial' },
        { title: '11. Dryland Agriculture', url: 'Page32', route: 'rainfed-agriculture' },
        { title: '12. Tankaa', url: 'Page34', route: 'tankaa' },
        { title: '13.The Great Wall of Surajpura', url: 'Page36', route: 'great-wall-surajpura' },
        { title: '14. Promotion of Saline Aquaculture', url: 'Page37', route: 'saline-aquaculture' },
        { title: '15. Urban Water Management System', url: 'Page39', route: 'mobile-water-tank-monitoring' },
      ],
    },
    { title: 'Acknowledgement', url: 'Page42', route: '/categorisation' },
    { title: 'Know More (References)', url: 'Page43', route: '/identification' },
    { title: 'Glossary of Terms', url: 'Page44', route: '/kund' },
  ];

  // Extract URLs of "Selected Best Practices" children
  const submenuUrls = menuItems
    .find((item) => item.title === 'Selected Best Practices')
    .children.map((child) => child.url);

  // Handle active section detection
  const handleSetActive = (to) => {
    setActiveItem(to);
    if (submenuUrls.includes(to)) {
      setDropdownOpen(true); // Open dropdown for submenu sections
    }
  };

  return (
    <>
      <aside
        className={`
          fixed top-0 left-0 z-30
          bg-blue-500 shadow-lg transition-all duration-300 ease-in-out overflow-auto
          ${isOpen ? 'translate-x-0 w-[300px]' : 'translate-x-[-100%] w-[0px]'}
          h-screen mt-0 md:mt-0
        `}
      >
        <div className="flex flex-col h-full relative">
          <div className="flex items-center justify-between p-4 bg-blue-500 relative z-10">
            <h2 className="text-white font-semibold text-lg ps-16 md:ps-0">WATER WISDOM</h2>
          </div>
          <nav className="flex-1 overflow-y-auto bg-white scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-100 relative z-0">
            <ul className="pb-2">
              {menuItems.map((item, index) => (
                <li key={index} className="relative">
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setDropdownOpen((prev) => !prev)}
                        className="flex items-center justify-between w-full px-4 py-3 text-left text-black font-semibold hover:bg-blue-200 text-sm border-b border-blue-100"
                        aria-expanded={dropdownOpen}
                      >
                        {item.title}
                        {dropdownOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                      </button>
                      {dropdownOpen && (
                        <ul className="bg-gray-50 border-l border-blue-200">
                          {item.children.map((child, idx) => (
                            <li key={idx} className="block text-sm border-b border-blue-100 cursor-pointer">
                              {isDashboard ? (
                                <ScrollLink
                                  to={child.url}
                                  smooth={true}
                                  duration={500}
                                  offset={-70}
                                  easing="easeInOutQuad"
                                  spy={true}
                                  onSetActive={handleSetActive}
                                  className={`block w-full ps-6 py-2 ${
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
                                </ScrollLink>
                              ) : (
                                <RouterLink
                                  to={child.route}
                                  className={`block w-full px-6 py-2 ${
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
                                </RouterLink>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <div className="block w-full text-left text-sm border-b border-blue-100 cursor-pointer">
                      {isDashboard ? (
                        <ScrollLink
                          to={item.url}
                          smooth={true}
                          duration={500}
                          offset={-70}
                          easing="easeInOutQuad"
                          spy={true}
                          onSetActive={handleSetActive}
                          className={`block w-full px-4 py-3 ${
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
                        </ScrollLink>
                      ) : (
                        <RouterLink
                          to={item.route || '/'}
                          className={`block w-full px-4 py-3 ${
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
                        </RouterLink>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => dispatch(toggleSidebar())}
        />
      )}
    </>
  );
};

export default Sidebar;