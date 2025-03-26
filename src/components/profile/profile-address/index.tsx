import {Form, Input} from "antd"
import {cookieInfo} from "../../../generic/cookies"

const ProfileAddress = () => {
    const {getCookie} = cookieInfo()
    const auth = getCookie("user") || {}
    return (
        <div>
            <Form
                className="grid grid-cols-2 gap-[0_25px]"
                layout="vertical"
                fields={[
                    {name: ["name"], value: auth?.name},
                    {name: ["surname"], value: auth?.surname},
                    {name: ["country"], value: auth?.billing_address?.country},
                    {name: ["town"], value: auth?.billing_address?.town},
                    {
                        name: ["street_address"],
                        value: auth?.billing_address?.street_address,
                    },
                    {
                        name: ["additional_street_address"],
                        value: auth?.billing_address?.additional_street_address,
                    },
                    {name: ["state"], value: auth?.billing_address?.state},
                    {name: ["zip"], value: auth?.billing_address?.zip},
                    {name: ["email"], value: auth?.email},
                    {name: ["phone_number"], value: auth?.phone_number},
                ]}>
                <Form.Item
                    name="name"
                    label="First name"
                    rules={[
                        {
                            required: true,
                            message: "Please enter First name",
                        },
                    ]}>
                    <Input placeholder="Type your first name..." />
                </Form.Item>
                <Form.Item
                    name="surname"
                    label="Last name"
                    rules={[
                        {
                            required: true,
                            message: "Please enter Last name",
                        },
                    ]}>
                    <Input placeholder="Type your last name..." />
                </Form.Item>
                <Form.Item
                    name="country"
                    label="Country / Region"
                    rules={[
                        {
                            required: true,
                            message: "Please enter  country...",
                        },
                    ]}>
                    <Input placeholder="Type your first name..." />
                </Form.Item>
                <Form.Item
                    name="town"
                    label="Town city"
                    rules={[
                        {
                            required: true,
                            message: "Please enter town city",
                        },
                    ]}>
                    <Input placeholder="Type your town city..." />
                </Form.Item>
                <Form.Item
                    name="street_address"
                    label="State address"
                    rules={[
                        {
                            required: true,
                            message: "Please enter  Street address...",
                        },
                    ]}>
                    <Input placeholder="Type your Street address..." />
                </Form.Item>
                <Form.Item
                    name="additional_street_address"
                    label="Extra address
            "
                    rules={[
                        {
                            required: true,
                            message: "Please enter Extra address",
                        },
                    ]}>
                    <Input
                        placeholder="Type your Extra address
..."
                    />
                </Form.Item>
                <Form.Item
                    name="state"
                    label="State"
                    rules={[
                        {
                            required: true,
                            message: "Please enter  state...",
                        },
                    ]}>
                    <Input placeholder="Type your state..." />
                </Form.Item>
                <Form.Item
                    name="zip"
                    label="Zip"
                    rules={[
                        {
                            required: true,
                            message: "Please enter zip",
                        },
                    ]}>
                    <Input placeholder="Type your Extra zip..." />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Email address"
                    rules={[
                        {
                            required: true,
                            message: "Please enter  email...",
                        },
                    ]}>
                    <Input placeholder="Type your email..." />
                </Form.Item>
                <Form.Item
                    name="phone_number"
                    label="Phone number"
                    rules={[
                        {
                            required: true,
                            message: "Please enter phone number",
                        },
                    ]}>
                    <Input
                        addonBefore={"+998"}
                        placeholder="Type your phone number..."
                    />
                </Form.Item>
                <button
                    type="submit"
                    className="text-white bg-[#46a358] rounded-md p-[10px_20px] mt-4">
                    Save changes
                </button>
            </Form>
        </div>
    )
}

export default ProfileAddress
