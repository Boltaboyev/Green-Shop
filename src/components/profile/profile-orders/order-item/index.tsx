import type {OrderType} from "../../../../@types"

const OrderItem = (data: OrderType) => {
    return (
        <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] justify-between mt-2 bg-[#f5f4f4c4] p-4 rounded-xl">
            <div>
                <p>Order Number</p>
                <h2 className="font-bold">{data._id}</h2>
            </div>
            <div>
                <p>Date</p>
                <h2 className="font-bold">{data.created_at.slice(0, 10)}</h2>
            </div>
            <div>
                <p>Total</p>
                <h2 className="font-bold">
                    $ {data?.extra_shop_info.total?.toFixed(2)}
                </h2>
            </div>
            <div>
                <p>More</p>
                <button className="text-[rgb(69,163,88)]">More details</button>
            </div>
        </div>
    )
}

export default OrderItem
