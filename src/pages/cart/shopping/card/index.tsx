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
import {FaPlus, FaMinus} from "react-icons/fa6"

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
        <div className="grid grid-cols-[2.5fr_1fr_1fr_1fr] items-center bg-[#eeeeee6d] p-2 rounded-md relative max-[650px]:grid-cols-[2fr_1fr_1fr] max-[580px]:grid-cols-[2fr_1fr] max-[410px]:grid-cols-1 max-[410px]:gap-4">
            <div className="flex items-center gap-4">
                <img
                    className="w-[70px] h-[70px] object-contain"
                    src={main_image}
                    alt=""
                />
                <div className="flex flex-col  gap-1 items-start">
                    <h3 className="text-[16px] font-medium text-[#3d3d3d]">
                        {title}
                    </h3>
                    <p className="text-[13px] font-normal flex justify-center items-center gap-[5px] max-[735px]:hidden max-[410px]:flex">
                        <span className="text-[#A5A5A5]">SKU: </span>{" "}
                        <p className="text-[#3d3d3db5]">{_id.slice(1, 15)}</p>
                    </p>

                    <div className="hidden items-center gap-2 max-[580px]:flex max-[410px]:hidden">
                        <button
                            disabled={disable}
                            onClick={() => dispatch(decrement(_id))}
                            className="flex justify-center items-center w-[20px] h-[20px] bg-[#c3c3c3] rounded-full text-white">
                            <FaMinus className="text-[10px]" />
                        </button>
                        <span className="text-[17px]">{count}</span>
                        <button
                            onClick={() => dispatch(increment(_id))}
                            className="flex justify-center items-center w-[20px] h-[20px] bg-[#c3c3c3] rounded-full text-white">
                            <FaPlus className="text-[10px]" />
                        </button>
                    </div>
                </div>
            </div>

            <p className="text-[#727272] text-[16px] font-medium max-[650px]:hidden">
                ${price}
            </p>

            <div className="flex items-center gap-2 max-[580px]:hidden">
                <button
                    disabled={disable}
                    onClick={() => dispatch(decrement(_id))}
                    className="w-[25px] h-[25px] bg-[#46A358] rounded-full text-white flex justify-center items-center">
                    <FaMinus className="text-[10px]" />
                </button>
                <span className="text-[17px]">{count}</span>
                <button
                    onClick={() => dispatch(increment(_id))}
                    className="w-[25px] h-[25px] bg-[#46A358] rounded-full text-white flex justify-center items-center">
                    <FaPlus className="text-[10px]" />
                </button>
            </div>

            <div className="flex justify-between items-end gap-2">
                <div className="flex flex-col gap-1 max-[580px]:items-center max-[580px]:justify-center">
                    <p className="text-[#727272] text-[13px] font-medium hidden max-[650px]:block">
                        ${price}
                    </p>

                    <h1 className="text-[#45a358] text-[18px] font-medium">
                        ${Number(userPrice).toFixed(2)}
                    </h1>
                </div>

                <div className="hidden items-center gap-2 max-[410px]:flex">
                    <button
                        disabled={disable}
                        onClick={() => dispatch(decrement(_id))}
                        className="flex justify-center items-center w-[20px] h-[20px] bg-[#c3c3c3] rounded-full text-white">
                        <FaMinus className="text-[10px]" />
                    </button>
                    <span className="text-[17px]">{count}</span>
                    <button
                        onClick={() => dispatch(increment(_id))}
                        className="flex justify-center items-center w-[20px] h-[20px] bg-[#c3c3c3] rounded-full text-white">
                        <FaPlus className="text-[10px]" />
                    </button>
                </div>
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
