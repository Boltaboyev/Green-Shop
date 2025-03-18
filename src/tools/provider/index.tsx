import {ReactElement} from "react"
import {Provider} from "react-redux"
import AuthProvider from "react-auth-kit"
import createStore from "react-auth-kit/createStore"
import {QueryClient, QueryClientProvider} from "react-query"

import {store} from "../../redux/store"
import Modals from "../../components/modals"

const storeAuth = createStore({
    authName: "_auth",
    authType: "cookie",
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === "https:",
})

const queryClient = new QueryClient()

const ProviderConfig = ({children}: {children: ReactElement}) => {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <AuthProvider store={storeAuth}>
                    <Provider store={store}>
                        <Modals /> {children}
                    </Provider>
                </AuthProvider>
            </QueryClientProvider>
        </>
    )
}

export default ProviderConfig
