import {Navigate} from "react-router-dom"

import {cookieInfo} from "../../generic/cookies"
import Profile from "../../pages/profile"

const PrivateRoute = () => {
    const {isAuthorization} = cookieInfo()

    return isAuthorization ? <Profile /> : <Navigate to="/" replace />
}

export default PrivateRoute
