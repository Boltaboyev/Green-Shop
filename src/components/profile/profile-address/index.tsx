import {Form, Input} from "antd"
import {cookieInfo} from "../../../generic/cookies"
import {useEditAddress} from "../../../hooks/useQuery/useQueryAction"

const ProfileAddress = () => {
    const {getCookie, setCookie} = cookieInfo()
    const auth = getCookie("user") || {}

    const {mutate} = useEditAddress()

    const updateAddress = (e: any) => {
        mutate({
            ...e,
            _id: auth._id,
            name: auth.name,
            surname: auth.surname,
            phone_number: auth.phone_number,
            email: auth.email,
        })

        setCookie("user", {
            ...auth,
            billing_address: {
                country: e.country,
                town: e.town,
                street_address: e.street_address,
                additional_street_address: e.additional_street_address,
                state: e.state,
                zip: e.zip,
            },
        })
    }

    return (
        <div>
            <Form
                className="grid grid-cols-2 gap-[0_25px]"
                layout="vertical"
                onFinish={updateAddress}
                fields={[
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
                ]}>
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
