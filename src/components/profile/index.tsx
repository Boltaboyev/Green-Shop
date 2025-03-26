import {useState} from "react"
import {useNavigate} from "react-router-dom"
import {Modal} from "antd"

import {cookieInfo} from "../../generic/cookies"

import ProfileDetails from "./profile-details"
import ProfileProducts from "./profile-products"
import ProfileAddress from "./profile-address"
import ProfileWishlist from "./profile-wishlist"
import TrackProfileOrders from "./profile-orders"

// icons
import {LuUserRound} from "react-icons/lu"
import {HiOutlineShoppingBag} from "react-icons/hi2"
import {GrLocation} from "react-icons/gr"
import {LuHeart} from "react-icons/lu"
import {AiOutlineOrderedList} from "react-icons/ai"
import {LoginOutlined} from "@ant-design/icons"

const ProfileComponents = () => {
    const navigate = useNavigate()
    const {removeCookie} = cookieInfo()

    const [activeTab, setActiveTab] = useState("details")
    const [isModalOpen, setIsModalOpen] = useState(false)

    const logout = () => {
        removeCookie("user")
        navigate("/")
    }

    return (
        <div className="grid grid-cols-[1.5fr_6fr] gap-[20px]">
            <aside className="h-fit sticky top-[25px] flex flex-col justify-between items-start gap-2 *:transition *:duration-[.2s] *:select-none">
                <div
                    className={`h-[40px] profile_nav flex items-center gap-[10px] cursor-pointer w-full ${
                        activeTab === "details"
                            ? "text-[#46a358] bg-[#46a35921]"
                            : "text-[#3d3d3d] group hover:text-[#46a358]"
                    }`}
                    onClick={() => setActiveTab("details")}>
                    <span
                        className={`h-full w-[3px] ${
                            activeTab === "details"
                                ? "bg-[#46a358]"
                                : "group-hover:bg-[#46a358]"
                        }`}></span>
                    <LuUserRound className="text-[20px]" />
                    <p>Account details</p>
                </div>

                <div
                    className={`h-[40px] profile_nav flex items-center gap-[10px] cursor-pointer w-full ${
                        activeTab === "products"
                            ? "text-[#46a358] bg-[#46a35921]"
                            : "text-[#3d3d3d] group hover:text-[#46a358]"
                    }`}
                    onClick={() => setActiveTab("products")}>
                    <span
                        className={`h-full w-[3px] ${
                            activeTab === "products"
                                ? "bg-[#46a358]"
                                : "group-hover:bg-[#46a358]"
                        }`}></span>
                    <HiOutlineShoppingBag className="text-[20px]" />
                    <p>My products</p>
                </div>

                <div
                    className={`h-[40px] profile_nav flex items-center gap-[10px] cursor-pointer w-full ${
                        activeTab === "address"
                            ? "text-[#46a358] bg-[#46a35921]"
                            : "text-[#3d3d3d] group hover:text-[#46a358]"
                    }`}
                    onClick={() => setActiveTab("address")}>
                    <span
                        className={`h-full w-[3px] ${
                            activeTab === "address"
                                ? "bg-[#46a358]"
                                : "group-hover:bg-[#46a358]"
                        }`}></span>
                    <GrLocation className="text-[20px]" />
                    <p>Address</p>
                </div>

                <div
                    className={`h-[40px] profile_nav flex items-center gap-[10px] cursor-pointer w-full ${
                        activeTab === "wishlist"
                            ? "text-[#46a358] bg-[#46a35921]"
                            : "text-[#3d3d3d] group hover:text-[#46a358]"
                    }`}
                    onClick={() => setActiveTab("wishlist")}>
                    <span
                        className={`h-full w-[3px] ${
                            activeTab === "wishlist"
                                ? "bg-[#46a358]"
                                : "group-hover:bg-[#46a358]"
                        }`}></span>
                    <LuHeart className="text-[20px]" />
                    <p>Wishlist</p>
                </div>

                <div
                    className={`h-[40px] profile_nav flex items-center gap-[10px] cursor-pointer w-full ${
                        activeTab === "orders"
                            ? "text-[#46a358] bg-[#46a35921]"
                            : "text-[#3d3d3d] group hover:text-[#46a358]"
                    }`}
                    onClick={() => setActiveTab("orders")}>
                    <span
                        className={`h-full w-[3px] ${
                            activeTab === "orders"
                                ? "bg-[#46a358]"
                                : "group-hover:bg-[#46a358]"
                        }`}></span>
                    <AiOutlineOrderedList className="text-[20px]" />
                    <p>Track order</p>
                </div>

                <div
                    onClick={() => setIsModalOpen(true)}
                    className="h-[40px] profile_nav flex items-center gap-[10px] cursor-pointer active:bg-red-100 group text-red-500 w-full">
                    <span className="h-full w-[3px] group-hover:bg-red-500"></span>
                    <LoginOutlined className="text-[20px]" />
                    <p>Log out</p>
                </div>
            </aside>

            <div className="h-full w-full">
                {activeTab === "details" && <ProfileDetails />}
                {activeTab === "products" && <ProfileProducts />}
                {activeTab === "address" && <ProfileAddress />}
                {activeTab === "wishlist" && <ProfileWishlist />}
                {activeTab === "orders" && <TrackProfileOrders />}
            </div>

            <Modal
                okType="danger"
                title="Log out"
                open={isModalOpen}
                onOk={logout}
                onCancel={() => setIsModalOpen(false)}
                okText="Yes, Logout"
                cancelText="Cancel">
                <p>Are you sure you want to log out?</p>
            </Modal>
        </div>
    )
}

export default ProfileComponents
