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
    },
})

export const {setAuthorizationModalVisibility, setOrderModalVisibility} =
    modalSlice.actions
export default modalSlice.reducer
