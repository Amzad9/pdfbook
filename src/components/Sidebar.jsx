import {useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  return (
 <div
      className={`h-screen fixed md:relative z-30  bg-blue-500 transition-all duration-300  ${
        isOpen ? 'overflow-hidden w-0' : ' w-[300px]'
      }`}
    >
    <ul className="menu menu-lg bg-base-200 rounded-box p-0 text-white">
      <div className="bg-blue-500 pt-16">
        <li><Link to="/aboutthebook">About the Book</Link></li>
        <li><Link to="/aboutthebook">Foreword from Chief Secretary, Government of Sindh</Link></li>
        <li><Link to="/aboutthebook">Message from Secretary, Sindh Irrigation Department</Link></li>
        <li><Link to="/aboutthebook">Message, Secretary, Sindh Agriculture Department.</Link></li>
        <li><Link to="/aboutthebook">Introduction</Link></li>
        <li><Link to="/aboutthebook">Water Resources of Sindh Province</Link></li>
        <li><Link to="/aboutthebook">Climate Dynamics and their Impacts</Link></li>
        <li><Link to="/aboutthebook">Identification of the Practices: The Process</Link></li>
        <li><Link to="/aboutthebook">Evaluation Location of the Practices</Link></li>
        <li><Link to="/aboutthebook">Categorisation of the Practices</Link></li>
        <li><Link to="/aboutthebook">Selected Best Practices</Link></li>
      </div>
    </ul>
</div>
  );
};

export default Sidebar;
