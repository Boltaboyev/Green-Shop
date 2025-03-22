import {CartType} from "../../../@types"
import {useReduxSelector} from "../../../hooks/useRedux"
import ShoppingCard from "./card"

function Shopping() {
    const {shop} = useReduxSelector((state) => state.shopSlice)
    return (
        <div>
            <div className="grid grid-cols-[2.5fr_1fr_1fr_1fr] border-b border-[#46a3598c] pb-3 mb-[20px] max-[1095px]:hidden">
                <h2 className="text-[#3D3D3D] text-[16px] font-medium">
                    Products
                </h2>
                <h2 className="text-[#3D3D3D] text-[16px] font-medium">
                    Price
                </h2>
                <h2 className="text-[#3D3D3D] text-[16px] font-medium">
                    Quantity
                </h2>
                <h2 className="text-[#3D3D3D] text-[16px] font-medium">
                    Total
                </h2>
            </div>
            {shop.map((value: CartType) => (
                <div
                    key={value._id}
                    className="flex flex-col gap-[15px] mb-[15px]">
                    <ShoppingCard {...value} />
                </div>
            ))}
        </div>
    )
}

export default Shopping
