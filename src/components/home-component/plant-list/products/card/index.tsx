import {useState, type FC} from "react"
import {useNavigate} from "react-router-dom"

import type {AuthUser2, CartType, WishlistItem} from "../../../../../@types"
import {useReduxDispatch} from "../../../../../hooks/useRedux"
import {getProductShop} from "../../../../../redux/shop-slice"

// icons
import {
    HeartFilled,
    HeartOutlined,
    ShoppingCartOutlined,
} from "@ant-design/icons"
import {FiSearch} from "react-icons/fi"
import {notificationApi} from "../../../../../generic/notification"
import {cookieInfo} from "../../../../../generic/cookies"
import {
    useDeleteIsLiked,
    useIsLiked,
} from "../../../../../hooks/useQuery/useQueryAction"
import {setAuthorizationModalVisibility} from "../../../../../redux/modal-slice"

const Card: FC<CartType> = (props) => {
    const navigate = useNavigate()
    const dispatch = useReduxDispatch()
    const notify = notificationApi()

    const {mutate} = useIsLiked()
    const {mutate: unlike} = useDeleteIsLiked()

    const {getCookie, setCookie} = cookieInfo()
    let user: AuthUser2 = getCookie("user")

    const [wishlist, setWishlist] = useState<WishlistItem[]>(
        user?.wishlist || []
    )

    const likeCheckUser = () => {
        if (!user) {
            dispatch(
                setAuthorizationModalVisibility({
                    open: true,
                    loading: false,
                })
            )
        } else {
            isLike()
        }
    }

    const isLiked = wishlist.some((item) => item.flower_id === props._id)

    const isLike = () => {
        user = {
            ...user,
            wishlist: [
                ...(user?.wishlist as WishlistItem[]),
                {route_path: props.category, flower_id: props._id},
            ],
        }

        setWishlist(user.wishlist!)
        setCookie("user", user)
        mutate({route_path: props.category, flower_id: props._id})
    }

    const disLike = () => {
        user = {
            ...user,
            wishlist: user.wishlist?.filter(
                (value) => value.flower_id !== props._id
            ),
        }

        setWishlist(user.wishlist!)
        setCookie("user", user)
        unlike({_id: props._id})
    }

    return (
        <div className="flex flex-col gap-[0.6rem] max-[350px]:border max-[350px]:p-[15px] border-t border-transparent hover:border-[#46A358] rounded-lg max-[350px]:border-[#399e3973]">
            <div className=" bg-[#f2f2f2] flex justify-center items-center transition *:duration-400 relative group rounded-md overflow-hidden">
                <div className="flex justify-center items-center h-[250px] overflow-hidden p-[10px] max-[500px]:h-[170px]">
                    <img
                        className="h-full object-contain"
                        src={props.main_image}
                        alt=""
                    />
                </div>
                <div className="flex transition-all duration-700 items-center gap-[10px] absolute -bottom-[15%] group-hover:bottom-[10px] *:border *:border-[#399e3973] *:text-[20px] *:text-[#3D3D3D] *:hover:text-[#46A358] *:w-[35px] *:h-[35px] *:bg-[#ffff] *:rounded-md *:flex *:items-center *:justify-center max-[750px]:bottom-[10px]">
                    <button
                        onClick={() => {
                            dispatch(getProductShop(props))
                            notify("add")
                        }}>
                        <ShoppingCartOutlined />
                    </button>

                    {isLiked ? (
                        <button onClick={disLike}>
                            <HeartFilled className="!text-red-500" />
                        </button>
                    ) : (
                        <button
                            onClick={() => {
                                likeCheckUser()
                            }}>
                            <HeartOutlined />
                        </button>
                    )}

                    <button
                        onClick={() =>
                            navigate(
                                `/plant-info/${props.category}/${props._id}`
                            )
                        }>
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
