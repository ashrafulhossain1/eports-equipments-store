import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../pages/Home";
import SignIn from "../components/Auth/SignIn";
import SignUp from "../components/Auth/SignUp";
import Protected from "./Protected";
import AllEquipments from "../pages/AllEquipments";
import AddEquipment from "../pages/AddEquipment";
import ViewDetails from "../components/AllEquipments/ViewDetails";
import MyEquipments from "../pages/MyEquipments";
import UpdateEquipments from "../pages/UpdateEquipments";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        errorElement: <p>Page is not define: error page</p>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch("http://localhost:5000/homeEquip")
            },
            {
                path: '/allEquipments',
                element: <AllEquipments></AllEquipments>,
                loader: () => fetch("http://localhost:5000/allEquipments")
            },
            {
                path: '/allEquipments/:id',
                element: <Protected><ViewDetails></ViewDetails></Protected>,
                loader: ({ params }) => fetch(`http://localhost:5000/allEquipments/${params.id}`)

            },
            {
                path: '/addEquipments',
                element: <Protected><AddEquipment></AddEquipment></Protected>
            },
            {
                path: '/myEquipments',
                element: <Protected><MyEquipments></MyEquipments></Protected>
            },
            {
                path: '/update/:id',
                element: <Protected><UpdateEquipments></UpdateEquipments></Protected>,
                loader: ({params})=> fetch(`http://localhost:5000/equipment/${params.id}`)
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