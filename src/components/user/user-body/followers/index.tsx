import {useEffect, useState} from "react"
import {Empty} from "antd"
import {useParams} from "react-router-dom"
import {useAxios} from "../../../../hooks/useAxios"
import {useQueryHandler} from "../../../../hooks/useQuery"
import Loader from "../../../../generic/loader"
import FollowersCard from "./followers-card"

const ProfileFollowers = () => {
    const {post_user_id} = useParams<{post_user_id: string}>()
    const {card_loader} = Loader()

    const {
        data,
        isError: isFollowersError,
        isLoading: isFollowersLoading,
    } = useQueryHandler({
        pathname: "user-followers",
        url: `user/by_id/${post_user_id}`,
    })

    const followerIds = data?.followers || []

    const [followers, setFollowers] = useState<any[]>([])
    const [error, setError] = useState<string | null>(null)

    const axios = useAxios()

    useEffect(() => {
        if (!followerIds.length) {
            return
        }

        Promise.all(
            followerIds.map((id: any) =>
                axios({url: `user/by_id/${id}`})
                    .then((res) => res.data)
                    .catch(() => {
                        setError("Failed to load some followers")
                        return null
                    })
            )
        )
            .then((results) => {
                setFollowers(results.filter(Boolean))
            })
            .catch(() => {
                setError("Failed to load followers")
                setFollowers([])
            })
    }, [followerIds, axios])

    if (isFollowersLoading) {
        return (
            <div className="grid grid-cols-3 gap-[25px_15px] max-[1000px]:grid-cols-2 max-[350px]:grid-cols-1 max-[350px]:gap-[15px]">
                {card_loader()}
            </div>
        )
    }

    if (isFollowersError || error) {
        return (
            <div className="p-4">
                <Empty description="Failed to load followers" />
            </div>
        )
    }

    if (!followers.length) {
        return (
            <div className="p-4">
                <Empty description="No followers yet" />
            </div>
        )
    }

    return (
        <div className="grid grid-cols-3 gap-[25px_15px] max-[1000px]:grid-cols-2 max-[350px]:grid-cols-1 max-[350px]:gap-[15px]">
            {followers.map((user) => (
                <FollowersCard key={user._id} {...user} />
            ))}
        </div>
    )
}

export default ProfileFollowers
