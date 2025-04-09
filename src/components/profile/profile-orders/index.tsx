import {Empty, Skeleton} from "antd"
import type {OrderType} from "../../../@types"
import OrderItem from "./order-item"
import {useQueryHandler} from "../../../hooks/useQuery"

const TrackProfileOrders = () => {
    const {
        data,
        isLoading,
        isError,
    }: {data?: OrderType[]; isLoading: boolean; isError: boolean} =
        useQueryHandler({
            pathname: "order",
            url: "order/get-order",
        })

    const filteredOrders = data ? data.slice(1, 15) : []

    return (
        <div>
            <h1 className="font-bold text-2xl">Track your Orders</h1>

            <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] justify-between p-4 font-bold *:opacity-75 border-b border-[#46a358] sticky top-0 bg-white">
                <div>
                    <p>Order Number</p>
                </div>
                <div>
                    <p>Date</p>
                </div>
                <div>
                    <p>Total</p>
                </div>
                <div>
                    <p>More</p>
                </div>
            </div>

            {isLoading || isError ? (
                <div className="flex flex-col gap-[5px]">
                    {Array.from({length: 6}).map((_, idx) => (
                        <Skeleton.Input
                            key={idx}
                            active
                            className="!w-full my-[5px] !h-[40px]"
                        />
                    ))}
                </div>
            ) : filteredOrders.length === 0 ? (
                <Empty description={<p>No order</p>} />
            ) : (
                filteredOrders.map((value: OrderType) => (
                    <OrderItem key={value._id} {...value} />
                ))
            )}
        </div>
    )
}

export default TrackProfileOrders
