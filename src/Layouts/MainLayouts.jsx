import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayouts = () => {


    
    return (
        <>
              <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </>
    );
};

export default MainLayouts;