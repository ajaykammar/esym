import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";

const MainLayout = () => {
  return (
    <div className="max-w-[1920px] mx-auto">
      <CustomCursor />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
