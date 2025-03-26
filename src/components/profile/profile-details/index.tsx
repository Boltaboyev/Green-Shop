import {cookieInfo} from "../../../generic/cookies"
import {Button, Form, Input, Upload} from "antd"
import {UploadOutlined} from "@ant-design/icons"

const ProfileDetails = () => {
    const {getCookie} = cookieInfo()
    const user = getCookie("user") || {}

    return (
        <div>
            <Form
                layout="vertical"
                initialValues={{
                    name: user.name || "",
                    last_name: user.surname || "",
                    email: user.email || "",
                    number: user.number || "",
                    username: user.username || "",
                    image: user.image ? [{url: user.image}] : [],
                }}>
                <div className="grid grid-cols-2 gap-[0_30px]">
                    <Form.Item
                        name="name"
                        label="First name"
                        rules={[{required: true}]}>
                        <Input placeholder="Enter your first name..." />
                    </Form.Item>

                    <Form.Item
                        name="last_name"
                        label="Last name"
                        rules={[{required: true}]}>
                        <Input placeholder="Enter your last name..." />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[{required: true, type: "email"}]}>
                        <Input placeholder="Enter your email ..." />
                    </Form.Item>

                    <Form.Item
                        name="number"
                        label="Phone number"
                        rules={[{required: true}]}>
                        <Input
                            addonBefore={"+998"}
                            placeholder="Enter your phone number ..."
                        />
                    </Form.Item>

                    <Form.Item
                        name="username"
                        label="Username"
                        rules={[{required: true}]}>
                        <Input placeholder="Enter your username ..." />
                    </Form.Item>

                    <Form.Item name="image" label="Image">
                        <Upload>
                            <Button icon={<UploadOutlined />}>Upload</Button>
                        </Upload>
                    </Form.Item>

                    <button
                        type="submit"
                        className="text-white bg-[#46a358] rounded-md p-[10px_20px] mt-4">
                        Save changes
                    </button>
                </div>
            </Form>
        </div>
    )
}

export default ProfileDetails
