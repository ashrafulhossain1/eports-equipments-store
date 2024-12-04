import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../pages/Home";
import SignIn from "../components/Auth/SignIn";
import SignUp from "../components/Auth/SignUp";

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
                path:'/allEquipments',
                element: <p>All equip</p>
            },
            {
                path: '/addEquipments',
                element: <p>Add Equip</p>
            },
            {
                path:'myEquipments',
                element: <p>My Equip</p>
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