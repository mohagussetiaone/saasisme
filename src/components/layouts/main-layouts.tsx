import { Outlet } from "react-router";
import Navbar from "./navbar";
import Footer from "./footer";

const MainLayout = () => {
  return (
    <main>
      <Navbar />
      <div className="mb-auto h-auto min-h-screen md:min-h-[calc(100vh-64px)] overflow-x-hidden">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default MainLayout;
