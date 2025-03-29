import {HeroSliderType, PathProfileType, TitleCategoryType} from "../@types"

import ProfileAddress from "../components/profile/profile-address"
import ProfileDetails from "../components/profile/profile-details"
import TrackProfileOrders from "../components/profile/profile-orders"
import ProfileProducts from "../components/profile/profile-products"
import ProfileWishlist from "../components/profile/profile-wishlist"



export const slider_data: HeroSliderType[] = [
    {
        id: 0,
        title: "Le’s Make a Better",
        subTitle: "WELCOME TO GREENSHOP",
        description:
            "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
        buttonText: "SHOP NOW",
        big_img_url:
            "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d",
        small_img_url:
            "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower2.png?alt=media&token=905a94e2-1250-4e56-9dcb-d16bbb1a31ca",
    },
    {
        id: 1,
        title: "LET'S LIVE IN A BETTER",
        subTitle: "WELCOME TO GREENSHOP",
        description:
            "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
        buttonText: "LE'TS START",
        big_img_url:
            "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fhero-flower-1.png?alt=media&token=74ea8d3d-06b5-41e7-bb12-7caaf3035a6d",
        small_img_url:
            "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower2.png?alt=media&token=905a94e2-1250-4e56-9dcb-d16bbb1a31ca",
    },
    {
        id: 2,
        title: "LET'S OBSERVE A BETTER",
        subTitle: "WELCOME TO GREENSHOP",
        description:
            "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
        buttonText: "GET CREDITS",
        big_img_url:
            "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fhero-flower-2.png?alt=media&token=5b5addec-d344-4897-a983-95c9b10a1662",
        small_img_url:
            "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower2.png?alt=media&token=905a94e2-1250-4e56-9dcb-d16bbb1a31ca",
    },
]

export const title_category: TitleCategoryType[] = [
    {
        id: 1,
        title: "All Plants",
        label: "all-plants",
    },
    {
        id: 2,
        title: "New Arrivals",
        label: "new-arrivals",
    },
    {
        id: 3,
        title: "Sale",
        label: "sale",
    },
]

import {LuUserRound} from "react-icons/lu"
import {HiOutlineShoppingBag} from "react-icons/hi2"
import {GrLocation} from "react-icons/gr"
import {LuHeart} from "react-icons/lu"
import {AiOutlineOrderedList} from "react-icons/ai"

export const path_profile: PathProfileType[] = [
    {
        id: 1,
        path: "",
        Component: ProfileDetails,
        Icon: LuUserRound,
        title: "Account Details",
    },
    {
        id: 2,
        path: "my-products",
        Component: ProfileProducts,
        Icon: HiOutlineShoppingBag,
        title: "My Products",
    },
    {
        id: 3,
        path: "address",
        Component: ProfileAddress,
        Icon: GrLocation,
        title: "Address",
    },
    {
        id: 4,
        path: "wishlist",
        Component: ProfileWishlist,
        Icon: LuHeart,
        title: "Wishlist",
    },
    {
        id: 5,
        path: "track-order",
        Component: TrackProfileOrders,
        Icon: AiOutlineOrderedList,
        title: "Track Order",
    },
]
