import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const MainLayouts = () => {



    return (
        <>
            <Helmet>
                <title>Home || SportEquip</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-320px)]">
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </>
    );
};

export default MainLayouts;