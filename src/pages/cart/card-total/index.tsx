import {useNavigate} from "react-router-dom"
import {useRef} from "react"
import {Form} from "antd"

import {useGetCoupon} from "../../../hooks/useQuery/useQueryAction"
import {CheckOutlined, LoadingOutlined} from "@ant-design/icons"
import {notificationApi} from "../../../generic/notification"
import {useReduxSelector} from "../../../hooks/useRedux"
import PricesTotal from "./prices"

const CardTotal = () => {
    const {isLoading, coupon} = useReduxSelector((state) => state.couponSlice)
    const inputRef = useRef<HTMLInputElement>(null)
    const notify = notificationApi()
    const {mutate} = useGetCoupon()

    const getCoupon = () => {
        const coupon_code: string = inputRef.current?.value as string
        if (coupon_code.trim() === "") {
            return notify("coupon")
        }
        const newDataCoupon = {coupon_code}
        mutate(newDataCoupon)
    }

    const navigate = useNavigate()

    return (
        <div>
            <h3 className="text-[#3D3D3D] text-[16px] font-medium pb-3 border-b border-[#46a3598c] mb-[20px]">
                Cart Total
            </h3>
            <Form onFinish={getCoupon} className="flex h-[40px]">
                <input
                    disabled={coupon ? true : false}
                    ref={inputRef}
                    name="coupon"
                    placeholder="Enter coupon code here..."
                    className="border w-4/5  border-[#46A358] pl-[15px] placeholder:font-light rounded-l-lg rounded-r-none outline-none text-[18px] text-black font-normal"
                />
                <button
                    disabled={coupon ? true : false}
                    className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-1/5 rounded-l-none ">
                    {isLoading ? (
                        <LoadingOutlined />
                    ) : coupon ? (
                        <CheckOutlined />
                    ) : (
                        <span>Apply</span>
                    )}
                </button>
            </Form>

            <PricesTotal />

            <div className="flex flex-col gap-[10px] mt-6">
                <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-full h-[40px]">
                    Proceed To Checkout
                </button>

                <button
                    onClick={() => navigate("/")}
                    className="bg-[#46a3591e] flex rounded-md items-center justify-center gap-1 text-base text-[#46a358] w-full h-[40px]">
                    Continue Shopping
                </button>
            </div>
        </div>
    )
}

export default CardTotal
