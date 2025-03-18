import {createSlice} from "@reduxjs/toolkit"

interface ModalAuthorizationType {
    open: boolean
    isLoading: boolean
}

interface initialStateType {
    authorizationModalVisibility: ModalAuthorizationType
}

const initialState: initialStateType = {
    authorizationModalVisibility: {
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
    },
})

export const {setAuthorizationModalVisibility} = modalSlice.actions
export default modalSlice.reducer
