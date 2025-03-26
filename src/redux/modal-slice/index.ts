import {createSlice} from "@reduxjs/toolkit"

interface ModalAuthorizationType {
    open: boolean
    isLoading: boolean
}

interface OrderModalType {
    open: boolean
    isLoading: boolean
}

interface initialStateType {
    authorizationModalVisibility: ModalAuthorizationType
    orderModalVisibility: OrderModalType
    orderDetailVisibility: boolean
}

const initialState: initialStateType = {
    authorizationModalVisibility: {
        open: false,
        isLoading: false,
    },
    orderModalVisibility: {
        open: false,
        isLoading: false,
    },
    orderDetailVisibility: false,
}

const modalSlice = createSlice({
    initialState,
    name: "Modal",
    reducers: {
        setAuthorizationModalVisibility(state, {payload}) {
            state.authorizationModalVisibility = payload
        },
        setOrderModalVisibility(state, {payload}) {
            state.orderModalVisibility = payload
        },
        setOrderDetailsVisibility(state) {
            state.orderDetailVisibility = !state.orderDetailVisibility
        },
    },
})

export const {
    setAuthorizationModalVisibility,
    setOrderModalVisibility,
    setOrderDetailsVisibility,
} = modalSlice.actions
export default modalSlice.reducer
