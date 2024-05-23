import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar/Navbar";
import Footer from "../pages/Footer/Footer";

const Root = () => {
  return (
    <div>
      <div className="mx-auto">
        <Navbar></Navbar>
      </div>
      <div className="">
        <Outlet></Outlet>
      </div>
      <div className="w-[100%] mx-auto mt-12">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
