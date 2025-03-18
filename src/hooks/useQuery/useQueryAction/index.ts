import {useMutation} from "react-query"
import {useDispatch} from "react-redux"

import {setAuthorizationModalVisibility} from "../../../redux/modal-slice"
import {notificationApi} from "../../../generic/notification"
import {useReduxDispatch} from "../../useRedux"
import {useAxios} from "../../useAxios"
import {AuthUser} from "../../../@types"

const useLogin = () => {
    const dispatch = useDispatch()
    const notify = notificationApi()
    const axios = useAxios()

    return useMutation({
        mutationFn: ({data}: {data: object}) =>
            axios({url: "/user/sign-in", body: data, method: "POST"}),
        onSuccess: (data) => {
            let {token, user} = data.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            dispatch(
                setAuthorizationModalVisibility({open: false, isLoading: false})
            )
            notify("login")
        },
        onError: (error: {status: number}) => {
            if (error.status === 409) notify(409)
            dispatch(
                setAuthorizationModalVisibility({open: true, isLoading: false})
            )
        },
    })
}

const useRegister = () => {
    const axios = useAxios()
    const notify = notificationApi()
    const dispatch = useReduxDispatch()
    return useMutation({
        mutationFn: ({data}: {data: object}) =>
            axios({url: "/user/sign-up/", method: "POST", body: data}),
        onSuccess: (data) => {
            let {token, user} = data.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            dispatch(
                setAuthorizationModalVisibility({open: false, isLoading: false})
            )
            notify("register")
        },
        onError: (error: {status: 406}) => {
            if (error.status === 406) notify(error.status)
            dispatch(
                setAuthorizationModalVisibility({open: true, isLoading: false})
            )
        },
    })
}

export {useLogin, useRegister}
