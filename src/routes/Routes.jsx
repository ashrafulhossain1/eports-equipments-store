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
import CategoryProduct from "../pages/CategoryProduct";
import ContactUs from "../pages/ContactUs";
import ErrorPage from "../pages/ErrorPage";
import About from "../pages/About";
import Supports from "../pages/Supports";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch("https://sport-express-server.vercel.app/homeEquip")
            },
            {
                path: '/allEquipments',
                element: <AllEquipments></AllEquipments>,
                loader: () => fetch("https://sport-express-server.vercel.app/allEquipments")
            },
            {
                path: '/allEquipments/:id',
                element: <Protected><ViewDetails></ViewDetails></Protected>,
                loader: ({ params }) => fetch(`https://sport-express-server.vercel.app/allEquipments/${params.id}`)

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
                loader: ({ params }) => fetch(`https://sport-express-server.vercel.app/equipment/${params.id}`)
            },
            {
                path: '/catBased/:cName',
                element: <CategoryProduct></CategoryProduct>
            },
            {
                path: '/SignIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/SignUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/contactUs',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/support',
                element: <Supports></Supports>
            }
        ]

    }
])
export default routes;