import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar'
import TopNavigation from '../components/TopNavigation';

function Home() {
  return (
    <div className='flex'>
       <Sidebar />
       <main className='w-full h-screen bg-gray-200'>
        <TopNavigation />
        <div className='max-w-[1200px] my-3 mx-auto px-3 overflow-y-scroll h-full pb-24'>
         <Outlet />
       </div>
      </main>
    </div>
  )
}

export default Home