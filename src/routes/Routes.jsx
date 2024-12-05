import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../pages/Home";
import SignIn from "../components/Auth/SignIn";
import SignUp from "../components/Auth/SignUp";
import Protected from "./Protected";
import AllEquipments from "../pages/AllEquipments";
import AddEquipment from "../pages/AddEquipment";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        errorElement: <p>Page is not define: error page</p>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allEquipments',
                element: <AllEquipments></AllEquipments>
            },
            {
                path: '/addEquipments',
                element: <Protected><AddEquipment></AddEquipment></Protected>
            },
            {
                path: '/myEquipments',
                element: <Protected><p>My Equip</p></Protected>
            },
            {
                path: '/SignIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/SignUp',
                element: <SignUp></SignUp>
            }
        ]

    }
])
export default routes;