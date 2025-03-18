import {Form, Input} from "antd"
import {LoadingOutlined} from "@ant-design/icons"

import type {FieldType} from "../../../../@types"
import {useReduxDispatch, useReduxSelector} from "../../../../hooks/useRedux"
import {setAuthorizationModalVisibility} from "../../../../redux/modal-slice"

// img
import google from "../../../../assets/icons/google.svg"

const Login = () => {
    const {authorizationModalVisibility} = useReduxSelector(
        (state) => state.modalSlice
    )

    const dispatch = useReduxDispatch()

    const onFinish = () => {
        dispatch(setAuthorizationModalVisibility({open: true, isLoading: true}))
    }

    return (
        <div className="px-[30px] flex flex-col gap-[15px] max-[600px]:p-0">
            <Form
                name="basic"
                onFinish={onFinish}
                initialValues={{remember: true}}
                autoComplete="off"
                className="w-[100%] flex flex-col gap-[5px]">
                <Form.Item<FieldType>
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Please input your username!",
                        },
                    ]}>
                    <Input
                        className="h-[45px] border-[#EAEAEA] !hover:border-[#46A358] !focus:border-[#46A358]"
                        placeholder="example@gmail.com"
                    />
                </Form.Item>

                <Form.Item<FieldType>
                    name="password"
                    className="flex flex-col gap-[14px]"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}>
                    <Input.Password
                        className="h-[45px] border-[#EAEAEA] !hover:border-[#46A358] !focus:border-[#46A358]"
                        placeholder="***********"
                    />
                </Form.Item>

                <p className="text-end text-[#46A358] font-medium cursor-pointer hover:underline mb-2">
                    Forgot password ?
                </p>

                <button
                    disabled={authorizationModalVisibility.isLoading}
                    className={`flex items-center justify-center gap-[0.5rem] w-[100%] bg-[#46A358] h-[45px] rounded-[0.5rem] font-medium text-[#fff] ${
                        authorizationModalVisibility.isLoading && "opacity-70"
                    }`}
                    type="submit">
                    {authorizationModalVisibility.isLoading ? (
                        <LoadingOutlined />
                    ) : (
                        "Login"
                    )}
                </button>
            </Form>

            <div className="flex items-center justify-center gap-4">
                <div className="w-[30%] h-[1px] bg-[#EAEAEA]"></div>
                <p className="w-[40%]text-[#3d3d3d78] text-[13px]">
                    Or login with
                </p>
                <div className="w-[30%] h-[1px] bg-[#EAEAEA]"></div>
            </div>

            <div className="flex flex-col gap-[15px]">
                <button className="font-medium text-[#727272] w-full h-[45px] rounded-lg border-[#EAEAEA] border flex items-center justify-center gap-[1rem]">
                    <img src={google} alt="google" />
                    Login with Google
                </button>
            </div>
        </div>
    )
}

export default Login
