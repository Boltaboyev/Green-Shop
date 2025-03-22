import {type FC} from "react"
import {Rate, Skeleton} from "antd"
import {HeartOutlined} from "@ant-design/icons"

import type {QueryType} from "../../../@types"
import AvatarItem from "../avatar"

const ShopInfo: FC<QueryType> = ({data, isLoading, isError}) => {
    const loader = isLoading || isError
    const size_Style =
        "w-[22px] h-[22px] flex justify-center items-center border border-[#EAEAEA] rounded-full hover:border-[#46A358] transition-colors font-medium text-[12px] p-3"

    return (
        <div>
            <div className="border-b pb-5  border-[#A6D1Ac] flex items-end justify-between max-[460px]:flex-col max-[460px]:items-start max-[460px]:gap-4">
                {isLoading || isError ? (
                    <div className="flex justify-start items-center gap-[20px]">
                        <div className="h-[60px] w-[60px] rounded-full !overflow-hidden max-[350px]:!w-[40px] max-[350px]:!h-[40px]">
                            <Skeleton.Node
                                className="!w-[200px] !h-[200px]"
                                active={true}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Skeleton.Input
                                active={true}
                                className="!h-[20px]"
                            />
                            <Skeleton.Input
                                active={true}
                                className="!h-[20px]"
                            />
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center gap-5">
                        <AvatarItem created_by={data?.created_by as string} />
                        <div className="flex flex-col max-[350px]:leading-[120%]">
                            <h2 className="text-[#3D3D3D] text-[25px] font-bold max-[1150px]:text-[18px]">
                                {data?.title}
                            </h2>
                            <p className="font-bold text-[#46A358] text-[20px] max-[350px]:text-[16px]">
                                ${data?.price}
                            </p>
                        </div>
                    </div>
                )}
                <div>
                    <Rate value={Math.random() * 6} disabled />
                    <p className="text-[#3d3d3d9a] font-medium text-[14px]">
                        {Math.round(Math.random() * 100)} customer review
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-8 mt-4">
                <div className="flex flex-col gap-2">
                    <h3 className="text-[#3d3d3d] font-medium text-[20px]">
                        Short description
                    </h3>

                    {isLoading || isError ? (
                        <Skeleton />
                    ) : (
                        <p className="text-[#3d3d3d9a] leading-[120%] font-normal text-[14px]">
                            {data?.short_description}
                        </p>
                    )}
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="text-[#3d3d3d] font-medium text-[20px]">
                        Size:
                    </h3>
                    <div className="flex gap-2">
                        <button className={`${size_Style}`}>S</button>
                        <button className={`${size_Style}`}>M</button>
                        <button className={`${size_Style}`}>L</button>
                        <button className={`${size_Style}`}>XL</button>
                    </div>
                </div>

                <div className="flex items-center gap-3 max-[400px]:flex-col max-[400px]:items-start">
                    <button className="bg-[#46A358] flex rounded-md  items-center justify-center text-white w-[130px] h-[35px] max-[400px]:w-full">
                        BUY NOW
                    </button>
                    <button className="bg-transparent border border-[#46A358] flex rounded-md  items-center justify-center text-[#46A358] w-[130px] h-[35px] max-[400px]:w-full">
                        Add To Card
                    </button>
                    <button className="bg-transparent border border-[#46A358] flex rounded-md  items-center justify-center text-[#46A358] w-[35px] h-[35px]">
                        <HeartOutlined />
                    </button>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="text-[#727272] text-[13px] font-normal">
                        <span className="text-[#A5A5A5] pr-2">SKU:</span>
                        {loader ? (
                            <Skeleton.Input
                                active={true}
                                className="!h-[15px]"
                            />
                        ) : (
                            data?._id
                        )}
                    </div>

                    <div className="text-[#727272] text-[15px] font-normal">
                        <span className="text-[#A5A5A5] pr-2">Categories:</span>
                        {loader ? (
                            <Skeleton.Input
                                active={true}
                                className="!h-[15px]"
                            />
                        ) : (
                            data?.category
                        )}
                    </div>

                    <div className="text-[#727272] text-[15px] font-normal">
                        <span className="text-[#A5A5A5] pr-2">Tags:</span>
                        {loader ? (
                            <Skeleton.Input
                                active={true}
                                className="!h-[15px]"
                            />
                        ) : (
                            "Home, Garden PLants"
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopInfo
