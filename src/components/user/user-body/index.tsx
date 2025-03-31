import {Tabs} from "antd"

import {UserBodyTitleType} from "../../../@types"

import About from "./about"
import Products from "./products"
import Posts from "./posts"
import Likes from "./likes"
import Followers from "./followers"

const UserBody = () => {
    const user_body_title: UserBodyTitleType[] = [
        {
            id: "1",
            title: "About",
            Component: About,
        },
        {
            id: "2",
            title: "Products",
            Component: Products,
        },
        {
            id: "3",
            title: "Posts",
            Component: Posts,
        },
        {
            id: "4",
            title: "Likes",
            Component: Likes,
        },
        {
            id: "5",
            title: "Followers",
            Component: Followers,
        },
    ]

    return (
        <div className="py-5">
            <Tabs
                defaultActiveKey="1"
                items={user_body_title.map(({id, title, Component}) => ({
                    label: title,
                    key: id,
                    children: <Component />,
                }))}
            />
        </div>
    )
}

export default UserBody
