import {Empty} from "antd"

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
            url: "/order/get-order",
        })
    return (
        <div>
            <h1 className="font-bold text-2xl">Track your Orders</h1>
            {isLoading || isError ? (
                "loading ..."
            ) : !data?.slice(62).length ? (
                <Empty description={<p>No order</p>} />
            ) : (
                data
                    ?.slice(62)
                    .map((value: OrderType) => (
                        <OrderItem key={value._id} {...value} />
                    ))
            )}
        </div>
    )
}

export default TrackProfileOrders
