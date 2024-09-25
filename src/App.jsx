import { useState, useEffect } from 'react';
import Banner from './Component/Banner';
import Card from './Component/Card';
import Footer from './Component/Footer';
import Castomcarsor from './Component/Castomcarsor';
// import ProductFilter from './Component/ProductFilter ';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = (e) => {
    e.stopPropagation();
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      // Close the sidebar when clicking outside of it
      const sidebar = document.getElementById('sidebar');
      const openSidebarButton = document.getElementById('open-sidebar');

      if (isSidebarOpen && !sidebar.contains(e.target) && !openSidebarButton.contains(e.target)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className="bg-gray-100">
      <Castomcarsor></Castomcarsor>
      <div className="h-screen flex overflow-hidden bg-gray-200">
        {/* Sidebar */}
        <div
          id="sidebar"
          className={`absolute bg-gray-800 z-50 text-white w-56 min-h-screen overflow-y-auto transition-transform transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } ease-in-out duration-300`}
        >
          {/* Sidebar Content */}
          <div className="p-4">
            <h1 className="text-2xl font-semibold">Sidebar</h1>
            <ul className="mt-4">
              <li className="mb-2">
                <a href="#" className="block hover:text-indigo-400">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="block hover:text-indigo-400">About</a>
              </li>
              <li className="mb-2">
                <a href="#" className="block hover:text-indigo-400">Services</a>
              </li>
              <li className="mb-2">
                <a href="#" className="block hover:text-indigo-400">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Navbar */}
          <div className="bg-white shadow">
            <div className="container mx-auto">
              <div className="flex justify-between items-center py-4 px-5">
               <img src="https://steadfast.com.bd/landing-page/asset/images/logo/logo.svg" alt="" />
                <button
                  className="text-gray-500 hover:text-gray-600"
                  id="open-sidebar"
                  onClick={toggleSidebar}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Content Body */}
          <div className="flex-1 overflow-auto p-4 container mx-auto">
           <Banner></Banner>
           <Card></Card>
           {/* <ProductFilter></ProductFilter> */}
           <Footer></Footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
