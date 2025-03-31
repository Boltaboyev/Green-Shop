import {useNavigate} from "react-router-dom"
import type {FC} from "react"
import {Card} from "antd"

import type {BlogType} from "../../../@types"
import {useAxios} from "../../../hooks/useAxios"

// icons
import {EyeOutlined, HeartOutlined, MessageOutlined} from "@ant-design/icons"

const BlogCard: FC<BlogType> = ({
    title,
    short_description,
    views,
    _id,
    created_by,
}) => {
    const navigate = useNavigate()
    const axios = useAxios()

    return (
        <Card
            className="flex flex-col justify-between"
            actions={[
                <div className="flex justify-center gap-1" key="setting">
                    <EyeOutlined />
                    <p>{views}</p>
                </div>,
                <div className="flex justify-center gap-1" key="edit">
                    <MessageOutlined />
                    <p>0</p>
                </div>,
                <div className="flex justify-center gap-1" key="like">
                    <HeartOutlined />
                    <p>0</p>
                </div>,
            ]}>
            <Card.Meta
                title={
                    <h2
                        onClick={() => {
                            axios({
                                url: "user/blog/view",
                                method: "PUT",
                                body: {_id},
                            })
                            navigate(`/blog/${_id}/${created_by}`)
                        }}
                        className="cursor-pointer">
                        {title}
                    </h2>
                }
                description={<>{short_description}</>}
            />
        </Card>
    )
}

export default BlogCard
