import Cookies from "js-cookie"
import {Form, Input, Radio} from "antd"
import TextArea from "antd/es/input/TextArea"

import {useReduxDispatch, useReduxSelector} from "../../../hooks/useRedux"
import {setAuthorizationModalVisibility} from "../../../redux/modal-slice"
import {useMakeOrderQuery} from "../../../hooks/useQuery/useQueryAction"
import OrderModal from "../../modals/order-modal"

// icons
import {LoadingOutlined} from "@ant-design/icons"

const OrdersForms = () => {
    const dispatch = useReduxDispatch()
    const {orderModalVisibility} = useReduxSelector((state) => state.modalSlice)
    const {shop} = useReduxSelector((state) => state.shopSlice)

    const auth = Cookies.get("authUser")
        ? JSON.parse(Cookies.get("authUser") as string)
        : {}
    const total_price = shop.reduce(
        (acc, value) => acc + Number(value.userPrice),
        16
    )

    const {mutate} = useMakeOrderQuery()

    const makeOrder = async (e: any) => {
        const extra_shop_info = {
            total: total_price,
            method: e.payment_method,
        }
        await mutate({shop_list: shop, billing_address: e, extra_shop_info})
    }

    const radio_style =
        "bordant-radio-wrapper ant-radio-wrapper-checked ant-radio-wrapper-in-form-item border border-[#46A358] w-full h-[40px] flex items-center pl-[10px] rounded-lg css-k7429zer"

    return (
        <Form
            onFinish={makeOrder}
            fields={[
                {name: ["name"], value: auth.name},
                {name: ["surname"], value: auth.surname},
                {name: ["country"], value: auth.billing_address?.country},
                {name: ["street"], value: auth.billing_address?.street_address},
                {name: ["state"], value: auth.billing_address?.state},
                {name: ["email"], value: auth.email},
                {name: ["zip"], value: auth.billing_address?.zip},
                {
                    name: ["appartment"],
                    value: auth.billing_address?.additional_street_address,
                },
                {name: ["town"], value: auth.billing_address?.town},
                {name: ["phone_number"], value: auth.phone_number},
            ]}
            layout="vertical"
            name="control-hooks">
            <div className="grid grid-cols-2 gap-5">
                <div>
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[{required: true}]}>
                        <Input placeholder="Type your first name..." />
                    </Form.Item>
                    <Form.Item
                        name="country"
                        label="Country / Region"
                        rules={[{required: true}]}>
                        <Input placeholder="Type your country..." />
                    </Form.Item>
                    <Form.Item
                        name="street"
                        label="Street Address"
                        rules={[{required: true}]}>
                        <Input placeholder="Type your street..." />
                    </Form.Item>
                    <Form.Item
                        name="state"
                        label="State"
                        rules={[{required: true}]}>
                        <Input placeholder="Type your state..." />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="Email address"
                        rules={[{required: true}]}>
                        <Input placeholder="Type your email..." />
                    </Form.Item>
                    <Form.Item
                        name="payment_method"
                        label="Payment Method"
                        rules={[
                            {
                                required: true,
                                message: "Please enter Payment Method",
                            },
                        ]}>
                        <Radio.Group className="flex flex-col gap-3">
                            <Radio
                                className={`${radio_style}`}
                                value={"other-payment-methods"}>
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fpayment_collected_methods.png?alt=media&token=c4bfd991-8bd8-4e6b-97dc-83381db193f7"
                                    alt=""
                                />
                            </Radio>
                            <Radio
                                className={`${radio_style}`}
                                value={"direct-bank-transfer"}>
                                Direct bank transfer
                            </Radio>
                            <Radio
                                className={`${radio_style}`}
                                value={"cash-on-delivery"}>
                                Cash on delivery
                            </Radio>
                        </Radio.Group>
                    </Form.Item>
                </div>
                <div>
                    <Form.Item
                        name="surname"
                        label="Last name"
                        rules={[{required: true}]}>
                        <Input placeholder="Type your last name..." />
                    </Form.Item>
                    <Form.Item
                        name="town"
                        label="Town / City"
                        rules={[{required: true}]}>
                        <Input placeholder="Type your town..." />
                    </Form.Item>
                    <Form.Item
                        label=""
                        name="appartment"
                        rules={[{required: true}]}>
                        <Input
                            className="mt-[30px]"
                            placeholder="Type your apartment..."
                        />
                    </Form.Item>
                    <Form.Item
                        name="zip"
                        label="Zip"
                        rules={[{required: true}]}>
                        <Input placeholder="Type your zip code..." />
                    </Form.Item>
                    <Form.Item
                        name="phone_number"
                        label="Phone number"
                        rules={[{required: true}]}>
                        <Input
                            addonBefore={"+998"}
                            placeholder="Type your phone number..."
                        />
                    </Form.Item>
                </div>
            </div>
            <Form.Item
                label="Comment"
                name="comment"
                rules={[{required: true}]}>
                <TextArea rows={10} placeholder="Type your comment..." />
            </Form.Item>
            <button
                onClick={() => {
                    if (!auth.id) {
                        dispatch(
                            setAuthorizationModalVisibility({
                                open: true,
                                isLoading: false,
                            })
                        )
                    }
                }}
                className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white mt-[40px] w-full h-[40px]">
                {orderModalVisibility.isLoading ? (
                    <LoadingOutlined />
                ) : (
                    "Place order"
                )}
            </button>
            <OrderModal />
        </Form>
    )
}

export default OrdersForms
