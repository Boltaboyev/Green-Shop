import {createBrowserRouter} from "react-router-dom"

import Home from "../pages/home"
import MainLayout from "../components/main-layout"

export const root = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
])
