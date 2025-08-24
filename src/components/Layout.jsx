import Navbar from "./Navbar";
import {Outlet} from 'react-router-dom'
 
const Layout = () => {
  return (
    <div className="min-h-screen font-rubik bg-neo-blue">
      <div className="p-2">
        <Navbar />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
