import {useState} from "react"
import {Outlet, useNavigate} from "react-router-dom"
import {Modal} from "antd"

import {cookieInfo} from "../../generic/cookies"

// icons

import {LoginOutlined} from "@ant-design/icons"
import {path_profile} from "../../utils"

const ProfileComponents = () => {
    const navigate = useNavigate()
    const {removeCookie} = cookieInfo()

    const [activeTab, setActiveTab] = useState("Account Details")
    const [isModalOpen, setIsModalOpen] = useState(false)

    const logout = () => {
        removeCookie("user")
        navigate("/")
    }

    return (
        <div className="grid grid-cols-[1.5fr_6fr] gap-[20px]">
            <aside className="h-fit sticky top-[25px] flex flex-col justify-between items-start gap-2 *:transition *:duration-[.2s] *:select-none">
                {path_profile.map(({id, Icon, title, path}) => (
                    <div
                        key={id}
                        className={`h-[40px] profile_nav flex items-center gap-[10px] cursor-pointer w-full ${
                            activeTab === `${title}`
                                ? "text-[#46a358] bg-[#46a35921]"
                                : "text-[#3d3d3d] group hover:text-[#46a358]"
                        }`}
                        onClick={() => {
                            setActiveTab(`${title}`)
                            navigate(`/profile/${path}`)
                        }}>
                        <span
                            className={`h-full w-[3px] ${
                                activeTab === `${title}`
                                    ? "bg-[#46a358]"
                                    : "group-hover:bg-[#46a358]"
                            }`}></span>
                        <div className="text-[20px]">
                            <Icon />
                        </div>
                        <p>{title}</p>
                    </div>
                ))}

                <div
                    onClick={() => setIsModalOpen(true)}
                    className="h-[40px] profile_nav flex items-center gap-[10px] cursor-pointer active:bg-red-100 group text-red-500 w-full">
                    <span className="h-full w-[3px] group-hover:bg-red-500"></span>
                    <LoginOutlined className="text-[20px]" />
                    <p>Log out</p>
                </div>
            </aside>

            <>
                <Outlet />
            </>

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
