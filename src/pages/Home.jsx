import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar'
import TopNavigation from '../components/TopNavigation';

function Home() {
  return (
    <div className='flex'>
       <Sidebar title="my-drawer" />
       <main className='w-full h-screen'>
        <TopNavigation title="my-drawer" />
        <div className='container px-4 mx-auto pt-0 pb-0'>
         <Outlet />
       </div>
      </main>
    </div>
  )
}

export default Home