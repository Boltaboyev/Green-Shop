import {useState} from "react"
import {Link, NavLink, useNavigate} from "react-router-dom"
import {Badge} from "antd"

import {setAuthorizationModalVisibility} from "../../redux/modal-slice"
import {useReduxDispatch, useReduxSelector} from "../../hooks/useRedux"

// icons
import logo from "../../assets/icons/logo.svg"
import searchLogo from "../../assets/icons/search-icon.svg"
import cartLogo from "../../assets/icons/cart.svg"
import {BellOutlined, CloseOutlined, MenuOutlined} from "@ant-design/icons"
import {cookieInfo} from "../../generic/cookies"

const Navbar = () => {
    const dispatch = useReduxDispatch()
    const navigate = useNavigate()
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const {getCookie} = cookieInfo()
    const user = getCookie("user")

    const {shop} = useReduxSelector((state) => state.shopSlice)

    return (
        <>
            <header className="border-b border-[#00800043]">
                <div className="container2 flex justify-between items-center gap-[10px] py-[10px]">
                    <Link className="header-left" to={"/"}>
                        <img src={logo} alt="" />
                    </Link>

                    <nav className="navbarLinks font-medium *:cursor-pointer text-[#3D3D3D] flex justify-center items-center gap-[30px] max-[600px]:hidden">
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink to={"/blog"}>Blog</NavLink>
                    </nav>

                    <nav
                        className={`flex items-center gap-8 max-[600px]:w-full max-[600px]:h-screen max-[600px]:fixed max-[600px]:top-0 max-[600px]:z-[999] max-[600px]:bg-white max-[600px]:p-[20px] max-[600px]:items-start max-[600px]:flex-col max-[600px]:justify-between transition-all duration-300 ${
                            isSidebarOpen
                                ? "max-[600px]:left-0"
                                : "max-[600px]:left-[-100%]"
                        }`}>
                        <CloseOutlined
                            className="absolute right-[10px] text-2xl !hidden max-[600px]:!block"
                            onClick={() => setIsSidebarOpen(false)}
                        />

                        <img
                            src={logo}
                            alt=""
                            className="max-[600px]:block hidden"
                        />

                        <nav className="navbarLinks font-medium *:cursor-pointer text-[#3D3D3D] hidden justify-center items-center gap-[30px] max-[600px]:flex flex-col">
                            <NavLink to={"/"}>Home</NavLink>
                            <NavLink to={"/blog"}>Blog</NavLink>
                        </nav>

                        <nav className="flex justify-center items-center gap-[25px] *:cursor-pointer max-[600px]:flex-col max-[600px]:items-start ">
                            <button className="max-[600px]:hidden">
                                <img
                                    src={searchLogo}
                                    alt="search"
                                    className="h-[18px] object-contain"
                                />
                            </button>

                            <button className="max-[600px]:flex justify-center items-center gap-[10px]">
                                <BellOutlined className="text-[20px]" />
                                <p className="max-[600px]:block hidden opacity-70 font-medium">
                                    Notification
                                </p>
                            </button>

                            <button
                                onClick={() => navigate("/products-shop")}
                                className="max-[600px]:flex justify-center items-center gap-[10px]">
                                <Badge
                                    count={shop.length || 0}
                                    showZero={false}>
                                    <img
                                        src={cartLogo}
                                        alt="cart"
                                        className="h-[20px] object-contain"
                                    />
                                </Badge>
                                <p className="max-[600px]:block hidden opacity-70 font-medium">
                                    Cart
                                </p>
                            </button>
                        </nav>

                        {!user ? (
                            <button
                                onClick={() => {
                                    dispatch(
                                        setAuthorizationModalVisibility({
                                            open: true,
                                            isLoading: false,
                                        })
                                    )
                                    setIsSidebarOpen(false)
                                }}
                                className="bg-[#46a358] rounded-lg font-medium text-[#fff] p-[7px_25px]">
                                Login
                            </button>
                        ) : (
                            <button
                                onClick={() => navigate("/profile")}
                                className="bg-[#46a358] rounded-lg font-medium text-[#fff] p-[7px_25px]">
                                {user?.name[0].toUpperCase() +
                                    user?.name.slice(1)}
                            </button>
                        )}
                    </nav>

                    <MenuOutlined
                        className="!hidden max-[600px]:!block text-2xl"
                        onClick={() => setIsSidebarOpen(true)}
                    />
                </div>
            </header>
        </>
    )
}

export default Navbar
