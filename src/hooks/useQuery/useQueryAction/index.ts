import {useMutation} from "react-query"
import {useDispatch} from "react-redux"

import {setAuthorizationModalVisibility} from "../../../redux/modal-slice"
import {notificationApi} from "../../../generic/notification"
import {useReduxDispatch} from "../../useRedux"
import {useAxios} from "../../useAxios"
import {signWithGoogle} from "../../../config"

const useLogin = () => {
    const dispatch = useDispatch()
    const notify = notificationApi()
    const axios = useAxios()

    return useMutation({
        mutationFn: ({data}: {data: object}) =>
            axios({url: "user/sign-in", body: data, method: "POST"}),
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
            axios({url: "user/sign-up/", method: "POST", body: data}),
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

// auth with google
const useLoginWithGoogle = () => {
    const dispatch = useDispatch()
    const notify = notificationApi()

    const axios = useAxios()
    return useMutation({
        mutationFn: async () => {
            const response = await signWithGoogle()
            return await axios({
                url: "user/sign-in/google",
                method: "POST",
                body: {email: response.user.email},
            })
        },
        onSuccess: (data) => {
            let {token, user} = data.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            dispatch(
                setAuthorizationModalVisibility({open: false, isLoading: false})
            )
            notify("login")
        },
        onError: (error: {status: 409}) => {
            if (error.status === 409) notify(409)
            dispatch(
                setAuthorizationModalVisibility({open: true, isLoading: false})
            )
        },
    })
}

const useRegisterWithGoogle = () => {
    const axios = useAxios()
    const notify = notificationApi()
    const dispatch = useReduxDispatch()
    return useMutation({
        mutationFn: async () => {
            const response = await signWithGoogle()
            return axios({
                url: "user/sign-up/google",
                method: "POST",
                body: {email: response.user.email},
            })
        },
        onSuccess: (data) => {
            let {token, user} = data.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            dispatch(
                setAuthorizationModalVisibility({open: false, isLoading: false})
            )
            notify("register")
        },
        onError: (error) => {
            console.log(error)
            dispatch(
                setAuthorizationModalVisibility({open: true, isLoading: false})
            )
            notify(406)
        },
    })
}

export {useLogin, useRegister, useRegisterWithGoogle, useLoginWithGoogle}
