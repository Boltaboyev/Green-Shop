// icons
import {
    MessageOutlined,
    PlusCircleOutlined,
    SendOutlined,
} from "@ant-design/icons"

const UserHeader = () => {
    const btn_style =
        "bg-[#46A358] flex rounded-md items-center justify-center gap-2 text-white p-[8px_20px] max-[625px]:p-[5px_15px] max-[625px]:text-[12px]"

    return (
        <div>
            <div className="w-full">
                <img
                    className="w-full h-[320px] rounded-xl max-[900px]:h-[210px] max-[625px]:hidden"
                    src="https://i0.wp.com/linkedinheaders.com/wp-content/uploads/2018/02/mountain-lake-header.jpg?fit=1584%2C396&ssl=1"
                    alt=""
                />
                <div className="w-full flex items-end justify-between gap-5 -translate-y-10 max-[900px]:-translate-y-5">
                    <div className="flex items-end gap-4 max-[625px]:items-center max-[340px]:flex-col max-[340px]:items-center max-[340px]:justify-center max-[340px]:w-full">
                        <div className="w-[150px] h-[150px] border-[5px] max-[625px]:border-2 border-[#46A358] rounded-full flex justify-center max-[900px]:h-[100px] max-[900px]:w-[100px]">
                            <img
                                className="rounded-full"
                                src={
                                    "https://alqadir.edu.pk/wp-content/uploads/2022/09/BS-Islamic-Studies-2022.jpg"
                                }
                                alt=""
                            />
                        </div>

                        <div className="max-[625px]:flex max-[625px]:flex-col max-[625px]:gap-2">
                            <div className="leading-[150%] max-[340px]:text-center">
                                <h2 className="text-[28px] font-bold max-[900px]:font-medium">
                                    Name Surname
                                </h2>
                                <p className="text-[#3d3d3db9] font-medium text-[14px]">
                                    Followers: 3
                                </p>
                            </div>

                            <div className="hidden gap-2 flex-wrap justify-center max-[625px]:flex">
                                <button className={`${btn_style} order-1`}>
                                    <MessageOutlined />
                                    <span className="hidden md:inline">
                                        Start chat
                                    </span>
                                </button>

                                <button
                                    className={`${btn_style} order-2 max-[340px]:order-3`}>
                                    <SendOutlined />
                                    <span className="hidden md:inline">
                                        Send Invitation
                                    </span>
                                </button>

                                <button
                                    className={`${btn_style} order-3 max-[340px]:order-2`}>
                                    <PlusCircleOutlined />
                                    <span>Follow</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 max-[625px]:hidden">
                        <button className={`${btn_style} `}>
                            <MessageOutlined />
                            <span className="max-[900px]:hidden">
                                Start chat
                            </span>
                        </button>
                        <button className={`${btn_style}`}>
                            <SendOutlined />
                            <span className="max-[900px]:hidden">
                                Send Invitation
                            </span>
                        </button>

                        <button className={`${btn_style}`}>
                            <PlusCircleOutlined />
                            <span>Follow</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserHeader
