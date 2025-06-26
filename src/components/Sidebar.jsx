import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../store/sidebarSlice';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const [activeItem, setActiveItem] = useState('');
  const location = useLocation();
  const isDashboard = location.pathname === '/';

  const menuItems = [
    { title: 'About the Book', url: 'Page5', route: '/about', page: '04' },
    // { title: 'Message, Secretary, Sindh Irrigation Department', url: 'Page9', route: '/messagesindh', page: '06' },
    // { title: 'Message, Secretary, Sindh Agriculture Department', url: 'Page10', route: '/messagesindh', page: '07' },
    { title: 'Introduction', url: 'Page7', route: '/introduction', page: '08' },
    { title: 'Water Resources of Sindh Province', url: 'Page9', route: '/waterresources', page: '10' },
    { title: 'Climate Dynamics and their Impacts', url: 'Page11', route: '/climatedynamics', page: '12' },
    { title: 'Identification of the Practices: The Process', url: 'Page12', route: '/identification', page: '13' },
    { title: 'Evaluation Location of the Practices', url: 'Page13', route: '/evaluation', page: '14' },
    { title: 'Categorisation of the Practices', url: 'Page14', route: '/evaluation', page: '15' },
    { title: 'Selected Best Practices', isHeading: true },
    { title: '1. Laser Land Levelling', url: 'Page17', route: '/laser-land-levelling', page: '18' },
    { title: '2. Zero Tillage Practices', url: 'Page21', route: '/zero-tillage-practices', page: '22' },
    { title: '3. Vegetables on Raised Beds', url: 'Page25', route: '/vegetables-raised-beds', page: '26' },
    { title: '4. Bed and Furrow Irrigation for Bananas', url: 'Page29', route: '/bed-furrow-irrigation-bananas', page: '30' },
    { title: '5. Orchard in Ring Basins', url: 'Page33', route: '/orchard-ring-basins', page: '34' },
    { title: '6. Intercropping', url: 'Page37', route: '/intercropping', page: '38' },
    { title: '7. Tunnel Farming', url: 'Page41', route: '/tunnel-farming', page: '42' },
    { title: '8. Drainage effluent for raising crops', url: 'Page45', route: '/drainage-effluent-crops', page: '46' },
    { title: '9. Residue Management of Banana', url: 'Page49', route: '/banana-residue-management', page: '50' },
    { title: '10. Hill Torrent Management', url: 'Page55', route: '/hill-torrents-beneficial', page: '56' },
    { title: '11. Dryland Agriculture', url: 'Page59', route: '/rainfed-agriculture', page: '60' },
    { title: '12. Tankaa', url: 'Page63', route: '/tankaa', page: '64' },
    { title: '13. The Great Wall of Surajpura', url: 'Page67', route: '/great-wall-surajpura', page: '68' },
    { title: '14. Promotion of Saline Aquaculture', url: 'Page69', route: '/saline-aquaculture', page: '70' },
    { title: '15. Urban Water Management System', url: 'Page74', route: '/mobile-water-tank-monitoring', page: '76' },
    { title: 'Acknowledgement', url: 'Page79', route: '/acknowledgement', page: '80' },
    { title: 'Know More (References)', url: 'Page81', route: '/references', page: '82' },
    { title: 'Glossary of Terms', url: 'Page84', route: '/glossary', page: '84' },
  ];

  const handleSetActive = (to) => {
    setActiveItem(to);
  };

  const renderLineWithDots = (label, page) => (
    <span className="flex justify-between items-center w-full">
      <span className="truncate text-white cursor-pointer">
        {label}
        {page && <span className="dot-leader mx-1">................................................................</span>}
      </span>
      {page && <span className="text-white font-semibold">{page}</span>}
    </span>
  );

  return (
    <>
      <aside
        className={`ps-10 fixed top-0 left-0 z-30 h-screen overflow-y-auto bg-[#89BDE5] border-r border-blue-100 shadow transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-x-0 w-[80%] sm:w-[420px]' : 'translate-x-[-100%] w-[0px]'
        }`}
      >
<div className='relative text-vertical-line'>
        <div className="absolute left-[-158px] tracking-[4px] top-[230px] -translate-y-1/2 transform -rotate-90 text-white font-semibold tracking-widest text-[24px]">
          TABLE OF CONTENTS
        </div>
</div>

        <div className="text-center pt-4 pb-3 z-10">
          <h2 className="text-xl font-bold tracking-wide text-white">WATER WISDOM</h2>
        </div>

        <nav className="px-1 py-2 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-50">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} className="text-[13px] ">
                {item.isHeading ? (
                  <div className="px-4 py-1 font-semibold text-white ps-4">
                    {renderLineWithDots(item.title, '')}
                  </div>
                ) : (
                  <>
                    {isDashboard ? (
                      <ScrollLink
                        to={item.url}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        easing="easeInOutQuad"
                        spy={true}
                        onSetActive={handleSetActive}
                        className={`block px-4 py-0 ${
                          activeItem === item.url
                            ? 'text-gray-800 font-bold'
                            : ' text-gray-800 font-light'
                        }`}
                        onClick={() => {
                          setActiveItem(item.url);
                          if (window.innerWidth < 768) dispatch(toggleSidebar());
                        }}
                      >
                        {renderLineWithDots(item.title, item.page)}
                      </ScrollLink>
                    ) : (
                      <RouterLink
                        to={item.route}
                        className={`block px-4 py-0 ${
                          activeItem === item.url
                            ? 'text-gray-800 font-semibold'
                            : ' text-gray-800'
                        }`}
                        onClick={() => {
                          setActiveItem(item.url);
                          if (window.innerWidth < 768) dispatch(toggleSidebar());
                        }}
                      >
                        {renderLineWithDots(item.title, item.page)}
                      </RouterLink>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden"
          onClick={() => dispatch(toggleSidebar())}
        />
      )}
    </>
  );
};

export default Sidebar;