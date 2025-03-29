import {Link, useParams} from "react-router-dom"
import {Avatar, Tooltip} from "antd"

import type {BlogTypeApiItem, UserTypeApi} from "../../../@types"
import {useQueryHandler} from "../../../hooks/useQuery"
import Loader from "../../../generic/loader"

// icons
import {
    EyeOutlined,
    HeartOutlined,
    MessageOutlined,
    ShareAltOutlined,
    UserOutlined,
} from "@ant-design/icons"

const UserPostBlog = () => {
    const {id, user_id} = useParams()

    const {data: user}: UserTypeApi = useQueryHandler({
        pathname: `user/${user_id}`,
        url: `/user/by_id/${user_id}`,
    })
    const {data, isLoading}: BlogTypeApiItem = useQueryHandler({
        pathname: `blog/${id}`,
        url: `/user/blog/${id}`,
    })

    const {blog_userPostLoader} = Loader()
    const loading = isLoading
    return (
        <section className="py-[30px]">
            <div className="container2">
                {loading ? (
                    blog_userPostLoader()
                ) : (
                    <div>
                        <div className="flex item-end justify-between">
                            <div className="flex items-center gap-4">
                                <Link
                                    to={`/user/${user_id}`}
                                    replace
                                    className="cursor-pointer">
                                    <Tooltip
                                        placement="top"
                                        title={`${user?.name || ""} ${
                                            user?.surname || ""
                                        }`}>
                                        <Avatar
                                            className="!w-[50px] !h-[50px]"
                                            src={user?.profile_photo}
                                            icon={<UserOutlined />}
                                        />
                                    </Tooltip>
                                </Link>
                                <div>
                                    <h2 className="font-bold text-[18px]">
                                        {user?.name} {user?.surname}
                                    </h2>
                                    <p className="text-[12px] font-medium opacity-50">
                                        Followers: {user?.followers?.length}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="py-[20px] font-bold text-[24px]">
                                {data?.title}
                            </h2>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: data?.content as string,
                                }}></div>
                        </div>
                        <div className="flex items-center gap-4 *:flex *:items-center *:gap-1 *:cursor-pointer mt-5 *:hover:text-[#46a358]">
                            <div>
                                <EyeOutlined /> <p>{data?.views}</p>
                            </div>
                            <div>
                                <HeartOutlined /> <p>0</p>
                            </div>
                            <div>
                                <MessageOutlined /> <p>0</p>
                            </div>
                            <div>
                                <ShareAltOutlined /> <p>0</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default UserPostBlog
