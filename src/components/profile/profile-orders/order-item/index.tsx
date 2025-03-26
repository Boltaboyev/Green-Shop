import type {OrderType} from "../../../../@types"

const OrderItem = (data: OrderType) => {
    return (
        <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] justify-between mt-2 bg-[#f5f4f4c4] p-4 rounded-xl">
            <div>
                <h2 className="text-[#3d3d3d]">{data._id}</h2>
            </div>
            <div>
                <h2 className="font-medium">{data.created_at.slice(0, 10)}</h2>
            </div>
            <div>
                <h2 className="font-medium text-[#46a358]">
                    $ {data?.extra_shop_info.total?.toFixed(2)}
                </h2>
            </div>
            <div>
                <button className="text-[#46a358] hover:underline">More details</button>
            </div>
        </div>
    )
}

export default OrderItem
