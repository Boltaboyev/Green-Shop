// icons
import {
    MessageOutlined,
    PlusCircleOutlined,
    SendOutlined,
} from "@ant-design/icons"
import {useParams} from "react-router-dom"
import {useQueryHandler} from "../../../hooks/useQuery"
import {UserTypeApi} from "../../../@types"

const UserHeader = () => {
    const btn_style =
        "bg-[#46A358] flex rounded-md items-center justify-center gap-2 text-white p-[8px_20px] max-[625px]:p-[5px_15px] max-[625px]:text-[12px]"

    const {post_user_id} = useParams()

    const {data: user}: UserTypeApi = useQueryHandler({
        pathname: `user/${post_user_id}`,
        url: `/user/${post_user_id}`,
    })

    console.log(user)

    return (
        <div>
            <div className="w-full">
                <img
                    className="w-full h-[320px] rounded-xl max-[900px]:h-[210px] max-[625px]:hidden"
                    src="https://i0.wp.com/linkedinheaders.com/wp-content/uploads/2018/02/mountain-lake-header.jpg?fit=1584%2C396&ssl=1"
                    alt=""
                />
                <div className="w-full flex items-end justify-between gap-5 -translate-y-10 max-[900px]:-translate-y-5">
                    <div className="flex items-end gap-4 max-[625px]:items-center max-[420px]:flex-col max-[420px]:items-center max-[420px]:justify-center max-[420px]:w-full">
                        <div className="w-[150px] h-[150px] border-[5px] max-[625px]:border-2 border-[#46A358] rounded-full flex justify-center max-[900px]:h-[100px] max-[900px]:w-[100px]">
                            <img
                                className="rounded-full"
                                src={
                                    user?.profile_photo ||
                                    "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                                }
                                alt=""
                            />
                        </div>

                        <div className="max-[625px]:flex max-[625px]:flex-col max-[625px]:gap-2">
                            <div className="leading-[150%] max-[420px]:text-center">
                                <h2 className="text-[28px] font-bold max-[900px]:font-medium">
                                    {user?.name || "Name"}{" "}
                                    {user?.surname || "Surname"}
                                </h2>
                                <p className="text-[#3d3d3db9] font-medium text-[14px]">
                                    Followers: {user?.followers?.length || 0}
                                </p>
                            </div>

                            <div className="hidden gap-2 flex-wrap justify-center max-[625px]:flex">
                                <button className={`${btn_style} order-1`}>
                                    <MessageOutlined />
                                    <span className="hidden md:inline">
                                        Start chat
                                    </span>
                                </button>

                                <button
                                    className={`${btn_style} order-2 max-[420px]:order-3`}>
                                    <SendOutlined />
                                    <span className="hidden md:inline">
                                        Send Invitation
                                    </span>
                                </button>

                                <button
                                    className={`${btn_style} order-3 max-[420px]:order-2`}>
                                    <PlusCircleOutlined />
                                    <span>Follow</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 max-[625px]:hidden">
                        <button className={`${btn_style} `}>
                            <MessageOutlined />
                            <span className="max-[900px]:hidden">
                                Start chat
                            </span>
                        </button>
                        <button className={`${btn_style}`}>
                            <SendOutlined />
                            <span className="max-[900px]:hidden">
                                Send Invitation
                            </span>
                        </button>

                        <button className={`${btn_style}`}>
                            <PlusCircleOutlined />
                            <span>Follow</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserHeader
