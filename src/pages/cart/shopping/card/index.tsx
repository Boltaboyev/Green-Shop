import type {FC} from "react"

import {CartType} from "../../../../@types"
import {useReduxDispatch} from "../../../../hooks/useRedux"
import {
    decrement,
    deleteShopCard,
    increment,
} from "../../../../redux/shop-slice"
import {notificationApi} from "../../../../generic/notification"

// icons
import {LuTrash} from "react-icons/lu"

const ShoppingCard: FC<CartType> = ({
    main_image,
    title,
    _id,
    price,
    count,
    userPrice,
}) => {
    const dispatch = useReduxDispatch()
    const notify = notificationApi()
    const disable = Number(count) <= 1 ? true : false
    return (
        <div className="grid grid-cols-[2.5fr_1fr_1fr_1fr] items-center bg-[#eeeeee6d] p-2 rounded-md relative">
            <div className="flex items-center gap-4">
                <img
                    className="w-[70px] h-[70px] object-contain"
                    src={main_image}
                    alt=""
                />
                <div className="flex flex-col  gap-1">
                    <h3 className="text-[16px] font-medium text-[#3d3d3d]">
                        {title}
                    </h3>
                    <p className="text-[13px] font-normal flex justify-center items-center gap-[5px]">
                        <span className="text-[#A5A5A5]">SKU: </span>{" "}
                        <p className="text-[#3d3d3db5]">{_id}</p>
                    </p>
                </div>
            </div>

            <div className="text-[#727272] text-[16px] font-medium ">
                ${price}
            </div>

            <div className="flex items-center gap-2">
                <button
                    disabled={disable}
                    onClick={() => dispatch(decrement(_id))}
                    className="w-[25px] h-[25px] bg-[#46A358] rounded-full text-white">
                    -
                </button>
                <span className="text-[17px]">{count}</span>
                <button
                    onClick={() => dispatch(increment(_id))}
                    className="w-[25px] h-[25px] bg-[#46A358] rounded-full text-white">
                    +
                </button>
            </div>

            <div className="text-[#45a358] text-[18px] font-medium">
                ${Number(userPrice).toFixed(2)}
            </div>

            <LuTrash
                onClick={() => {
                    dispatch(deleteShopCard(_id))
                    notify("delete")
                }}
                className="text-[#727272] text-[20px] absolute right-3 cursor-pointer hover:text-[#46A358]"
            />
        </div>
    )
}

export default ShoppingCard
