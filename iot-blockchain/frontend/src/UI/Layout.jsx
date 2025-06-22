import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Layout() {
  return (
    <div className="bg-[#060010] p-4 ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
