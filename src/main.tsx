import {RouterProvider} from "react-router-dom"
import {createRoot} from "react-dom/client"

import ProviderConfig from "./tools/provider"
import {root} from "./routes"

import "./index.css"

createRoot(document.getElementById("root")!).render(
    <ProviderConfig>
        <RouterProvider router={root} />
    </ProviderConfig>
)
