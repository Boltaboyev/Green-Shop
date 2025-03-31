import {Card, Avatar} from "antd"
import {
    CommentOutlined,
    ShareAltOutlined,
    UserOutlined,
} from "@ant-design/icons"

type FollowerProps = {
    _id: string
    name: string
    surname: string
    profile_photo?: string
}

const FollowersCard = ({name, surname, profile_photo}: FollowerProps) => {
    const fullName = `${name} ${surname}`.trim()
    return (
        <Card
            style={{width: "100%", marginBottom: 16}}
            actions={[<CommentOutlined />, <ShareAltOutlined />]}>
            <Card.Meta
                avatar={
                    <Avatar
                        src={profile_photo}
                        icon={!profile_photo && <UserOutlined />}
                        size="large"
                    />
                }
                title={fullName}
                style={{alignItems: "center"}}
            />
        </Card>
    )
}

export default FollowersCard
