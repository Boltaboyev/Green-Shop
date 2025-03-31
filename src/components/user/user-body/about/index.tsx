import {CalendarOutlined, TeamOutlined, HeartOutlined} from "@ant-design/icons"
import {useParams} from "react-router-dom"
import {useQueryHandler} from "../../../../hooks/useQuery"

const About = () => {
    const {post_user_id} = useParams()

    const {data: user} = useQueryHandler({
        pathname: `user/${post_user_id}`,
        url: `user/${post_user_id}`,
    })

    

    return (
        <div>
            <div>
                <h2 className="text-2xl font-bold">
                    {user?.name} {user?.surname}
                </h2>
                <p className="text-gray-600">@{user?.username}</p>
                <p className="text-sm text-gray-500">
                    "{user?.user_type?.toUpperCase()}"
                </p>
            </div>

            <div className="mt-6 flex justify-between bg-gray-100 p-4 rounded-lg">
                <div className="flex flex-col items-center">
                    <TeamOutlined className="text-green-500 text-2xl" />
                    <p className="text-lg font-bold">
                        {user?.followers?.length || 0}
                    </p>
                    <span className="text-gray-600">Followers</span>
                </div>
                <div className="flex flex-col items-center">
                    <HeartOutlined className="text-red-500 text-2xl" />
                    <p className="text-lg font-bold">
                        {user?.wishlist?.length || 0}
                    </p>
                    <span className="text-gray-600">Wishlist</span>
                </div>
                <div className="flex flex-col items-center">
                    <CalendarOutlined className="text-blue-500 text-2xl" />
                    <p className="text-lg font-bold">
                        {new Date(user?.created_at).toLocaleDateString()}
                    </p>
                    <span className="text-gray-600">Joined</span>
                </div>
            </div>
        </div>
    )
}

export default About
