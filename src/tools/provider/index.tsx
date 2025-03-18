import {ReactElement} from "react"
import {Provider} from "react-redux"
import {QueryClient, QueryClientProvider} from "react-query"

import {store} from "../../redux/store"
import Modals from "../../components/modals"

const queryClient = new QueryClient()

const ProviderConfig = ({children}: {children: ReactElement}) => {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <Modals /> {children}
                </Provider>
            </QueryClientProvider>
        </>
    )
}

export default ProviderConfig
