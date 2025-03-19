import {Form, Input} from "antd"
import {LoadingOutlined} from "@ant-design/icons"

import type {RegisterType} from "../../../../@types"
import {useReduxDispatch, useReduxSelector} from "../../../../hooks/useRedux"
import {setAuthorizationModalVisibility} from "../../../../redux/modal-slice"
import {
    useRegister,
    useRegisterWithGoogle,
} from "../../../../hooks/useQuery/useQueryAction"

// img
import google from "../../../../assets/icons/google.svg"

const Register = () => {
    const {mutate} = useRegister()
    const dispatch = useReduxDispatch()
    const {authorizationModalVisibility} = useReduxSelector(
        (state) => state.modalSlice
    )

    const onFinish = (e: RegisterType) => {
        dispatch(setAuthorizationModalVisibility({open: true, isLoading: true}))

        const {name, surname, email, password} = e
        mutate({data: {name, surname, email, password}})
    }

    const {mutate: registerWithGoogle} = useRegisterWithGoogle()

    return (
        <div className="px-[30px] flex flex-col gap-[15px] max-[600px]:p-0">
            <Form
                name="basic"
                onFinish={onFinish}
                initialValues={{remember: true}}
                className="w-[100%] flex flex-col gap-[5px]">
                <Form.Item<RegisterType>
                    name="name"
                    rules={[
                        {required: true, message: "Please input your name!"},
                    ]}>
                    <Input
                        size="small"
                        className="h-[45px] border-[#EAEAEA] !hover:border-[#46A358] !focus:border-[#46A358]"
                        placeholder="name"
                    />
                </Form.Item>

                <Form.Item<RegisterType>
                    name="surname"
                    rules={[
                        {required: true, message: "Please input your surname!"},
                    ]}>
                    <Input
                        size="small"
                        className="h-[45px] border-[#EAEAEA] !hover:border-[#46A358] !focus:border-[#46A358]"
                        placeholder="surname"
                    />
                </Form.Item>

                <Form.Item<RegisterType>
                    name="email"
                    rules={[
                        {required: true, message: "Please input your email!"},
                    ]}>
                    <Input
                        size="small"
                        className="h-[45px] border-[#EAEAEA] !hover:border-[#46A358] !focus:border-[#46A358]"
                        placeholder="example@gmail.com"
                    />
                </Form.Item>

                <Form.Item<RegisterType>
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}>
                    <Input.Password
                        size="small"
                        className="h-[45px] border-[#EAEAEA] !hover:border-[#46A358] !focus:border-[#46A358]"
                        placeholder="password"
                    />
                </Form.Item>

                <button
                    disabled={authorizationModalVisibility.isLoading}
                    className={`flex items-center justify-center gap-[0.5rem] w-[100%] bg-[#46A358] h-[45px] rounded-lg font-medium text-[#fff] ${
                        authorizationModalVisibility.isLoading && "opacity-70"
                    }`}
                    type="submit">
                    {authorizationModalVisibility.isLoading ? (
                        <LoadingOutlined />
                    ) : (
                        "Register"
                    )}
                </button>
            </Form>

            <div className="flex items-center justify-center gap-4">
                <div className="w-[30%] h-[1px] bg-[#EAEAEA]"></div>
                <p className="w-[40%]text-[#3d3d3d78] text-[13px]">
                    Or register with
                </p>
                <div className="w-[30%] h-[1px] bg-[#EAEAEA]"></div>
            </div>

            <div className="flex flex-col gap-[15px]">
                <button
                    onClick={() => registerWithGoogle()}
                    className="font-medium text-[#727272] w-full h-[45px] rounded-lg border-[#EAEAEA] border flex items-center justify-center gap-[1rem]">
                    <img src={google} alt="google" /> Register with Google
                </button>
            </div>
        </div>
    )
}

export default Register
