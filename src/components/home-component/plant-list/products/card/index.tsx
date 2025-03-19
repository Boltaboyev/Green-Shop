import type {FC} from "react"
import {useNavigate} from "react-router-dom"

import type {CartType} from "../../../../../@types"

// icons
import {HeartOutlined, ShoppingCartOutlined} from "@ant-design/icons"
import {FiSearch} from "react-icons/fi"

const Card: FC<CartType> = (props) => {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col gap-[0.6rem] max-[350px]:border max-[350px]:p-[15px] rounded-lg max-[350px]:border-[#399e3973]">
            <div className=" bg-[#f2f2f2] flex justify-center items-center transition *:duration-400 relative group rounded-md overflow-hidden">
                <div className="flex justify-center items-center h-[250px] overflow-hidden p-[10px] max-[500px]:h-[170px]">
                    <img
                        className="h-full object-contain"
                        src={props.main_image}
                        alt=""
                    />
                </div>
                <div className="flex transition-all duration-700 items-center gap-[10px] absolute -bottom-[15%] group-hover:bottom-[10px] *:border *:border-[#399e3973] *:text-[20px] *:text-[#3D3D3D] *:hover:text-[#46A358] *:w-[35px] *:h-[35px] *:bg-[#ffff] *:rounded-md *:flex *:items-center *:justify-center max-[750px]:bottom-[10px]">
                    <button>
                        <ShoppingCartOutlined />
                    </button>

                    <button>
                        <HeartOutlined />
                    </button>

                    <button onClick={() => navigate(`/detail/${props._id}`)}>
                        <FiSearch />
                    </button>
                </div>
            </div>
            <div className="flex flex-col justify-between items-start">
                <h4 className="font-[500] text-[#3D3D3D] ">{props.title}</h4>
                <div className="flex items-center gap-[10px]">
                    <h5 className="text-[#46A358] font-[700]">
                        {props.price} $
                    </h5>
                    {props?.discount_price ? (
                        <h6 className="text-[#A5A5A5] font-[400] line-through">
                            {props?.discount_price} $
                        </h6>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    )
}

export default Card
