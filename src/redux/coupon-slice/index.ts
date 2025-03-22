import {createSlice} from "@reduxjs/toolkit"

interface InitialStateType {
    isLoading: boolean
    coupon: number
}

const initialState: InitialStateType = {
    isLoading: false,
    coupon: 0,
}

const couponSlice = createSlice({
    name: "coupon",
    initialState,
    reducers: {
        setCoupon(state, {payload}) {
            state.coupon = payload
        },
        setIsLoading(state, {payload}) {
            state.isLoading = payload
        },
    },
})

export const {setCoupon, setIsLoading} = couponSlice.actions
export default couponSlice.reducer
