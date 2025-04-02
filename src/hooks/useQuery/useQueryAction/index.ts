import {useMutation} from "react-query"
import {useDispatch} from "react-redux"

import {
    setAuthorizationModalVisibility,
    setOrderModalVisibility,
} from "../../../redux/modal-slice"
import {notificationApi} from "../../../generic/notification"
import {useReduxDispatch} from "../../useRedux"
import {useAxios} from "../../useAxios"
import {signWithGoogle} from "../../../config"
import {cookieInfo} from "../../../generic/cookies"
import {setCoupon, setIsLoading} from "../../../redux/coupon-slice"
import {CouponType} from "../../../@types"
import {message, notification} from "antd"

const useLogin = () => {
    const dispatch = useDispatch()
    const notify = notificationApi()
    const axios = useAxios()
    const {setCookie} = cookieInfo()

    return useMutation({
        mutationFn: ({data}: {data: object}) =>
            axios({url: "user/sign-in", body: data, method: "POST"}),
        onSuccess: (data) => {
            const {token, user} = data.data
            localStorage.setItem("token", token)
            setCookie("user", user)
            dispatch(
                setAuthorizationModalVisibility({open: false, isLoading: false})
            )
            notify("login")
        },
        onError: (error: {status: number}) => {
            if (error.status === 409) {
                notify(409)
            } else {
                notify("auth_error")
            }
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
    const {setCookie} = cookieInfo()

    return useMutation({
        mutationFn: ({data}: {data: object}) =>
            axios({url: "user/sign-up/", method: "POST", body: data}),
        onSuccess: (data) => {
            const {token, user} = data.data
            localStorage.setItem("token", token)
            setCookie("user", user)
            dispatch(
                setAuthorizationModalVisibility({open: false, isLoading: false})
            )
            notify("register")
        },
        onError: (error: {status: 406}) => {
            if (error.status === 406) {
                notify(error.status)
            } else {
                notify("auth_error")
            }
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
    const {setCookie} = cookieInfo()

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
            const {token, user} = data.data
            localStorage.setItem("token", token)
            setCookie("user", user)
            dispatch(
                setAuthorizationModalVisibility({open: false, isLoading: false})
            )
            notify("login")
        },
        onError: (error: {status: 409}) => {
            if (error.status === 409) {
                notify(409)
            } else {
                notify("auth_error")
            }
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
    const {setCookie} = cookieInfo()

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
            const {token, user} = data.data
            localStorage.setItem("token", token)
            setCookie("user", user)

            dispatch(
                setAuthorizationModalVisibility({open: false, isLoading: false})
            )
            notify("register")
        },
        onError: () => {
            dispatch(
                setAuthorizationModalVisibility({open: true, isLoading: false})
            )
            notify(406)
        },
    })
}

const useGetCoupon = () => {
    const axios = useAxios()
    const notify = notificationApi()
    const dispatch = useReduxDispatch()
    return useMutation({
        mutationFn: (data: object) => {
            dispatch(setIsLoading(true))
            return axios({
                url: "features/coupon",
                params: data,
            })
        },
        onSuccess: (data: CouponType) => {
            notify("success_coupon")
            dispatch(setIsLoading(false))
            dispatch(setCoupon(data.discount_for))
        },
        onError: () => {
            notify("coupon_404")
            dispatch(setIsLoading(false))
        },
    })
}

const useMakeOrderQuery = () => {
    const axios = useAxios()
    const dispatch = useReduxDispatch()
    return useMutation({
        mutationFn: (data: object) => {
            dispatch(setOrderModalVisibility({open: false, isLoading: true}))
            return axios({
                url: "/order/make-order",
                method: "POST",
                body: {...data},
            })
        },
        onSuccess: () => {
            dispatch(setOrderModalVisibility({open: true, isLoading: false}))
        },
    })
}

const useEditDetails = () => {
    const axios = useAxios()
    const notify = notificationApi()

    return useMutation({
        mutationFn: (data: object) => {
            return axios({
                url: "user/account-details",
                method: "POST",
                body: data,
            })
        },
        onSuccess: () => {
            notify("editProfile")
        },
        onError: () => {
            notify("errorEditProfile")
        },
    })
}

export const useEditAddress = () => {
    const axios = useAxios()
    const notify = notificationApi()

    return useMutation({
        mutationFn: (data: object) => {
            return axios({url: "user/address", method: "POST", body: data})
        },
        onSuccess: () => {
            notify("editAddress")
        },
        onError: () => {
            notify("errorEditAddress")
        },
    })
}

export const useIsLiked = () => {
    const axios = useAxios()
    const notify = notificationApi()

    return useMutation({
        mutationFn: (data: object) => {
            return axios({
                url: "user/create-wishlist",
                method: "POST",
                body: data,
            })
        },
        onSuccess: () => {
            notify("like")
        },
    })
}

export const useDeleteIsLiked = () => {
    const axios = useAxios()
    const notify = notificationApi()

    return useMutation({
        mutationFn: (data: {_id: string}) => {
            return axios({
                url: "user/delete-wishlist",
                method: "DELETE",
                body: data,
            })
        },
        onSuccess: () => {
            notify("unlike")
        },
    })
}

export const useFollowUser = () => {
    const axios = useAxios()
    const notify = notificationApi()

    return useMutation({
        mutationFn: (data: {_id: string}) => {
            return axios({
                url: "user/follow",
                method: "POST",
                body: data,
            })
        },
        onSuccess: () => {
            notify("follow")
        },
    })
}

export const useUnfollowUser = () => {
    const axios = useAxios()
    const notify = notificationApi()

    return useMutation({
        mutationFn: (data: {_id: string}) => {
            return axios({
                url: "user/unfollow",
                method: "POST",
                body: data,
            })
        },
        onSuccess: () => {
            notify("unfollow")
        },
    })
}

export {
    useLogin,
    useRegister,
    useRegisterWithGoogle,
    useLoginWithGoogle,
    useGetCoupon,
    useMakeOrderQuery,
    useEditDetails,
}
