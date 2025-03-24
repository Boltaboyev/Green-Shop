import {createBrowserRouter} from "react-router-dom"

import Home from "../pages/home"
import MainLayout from "../components/main-layout"
import PlantInfo from "../pages/plant-info"
import ProductsShop from "../pages/cart"
import ProductCheckout from "../pages/product-checkout"

export const root = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/plant-info/:category/:id",
                element: <PlantInfo />,
            },
            {
                path: "/products-shop",
                element: <ProductsShop />,
            },
            {
                path: "/product-checkout",
                element: <ProductCheckout />,
            },
        ],
    },
])
