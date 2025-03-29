import {createBrowserRouter} from "react-router-dom"

import Home from "../pages/home"
import MainLayout from "../components/main-layout"
import PlantInfo from "../pages/plant-info"
import ProductsShop from "../pages/cart"
import ProductCheckout from "../pages/product-checkout"
import Blog from "../pages/blog"
import UserPostBlog from "../components/blog/blog-userPost"
import PrivateRoute from "./private"
import User from "../pages/user"
import {path_profile} from "../utils"

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
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "/blog/:id/:user_id",
                element: <UserPostBlog />,
            },
            {
                path: "/profile",
                element: <PrivateRoute />,
                children: path_profile.map(({path, Component}) => ({
                    path: `${path}`,
                    element: <Component />,
                })),
            },
            {
                path: "/user/:post_user_id",
                element: <User />,
            },
        ],
    },
])
