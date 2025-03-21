import {FC} from "react"

import {QueryType} from "../../../@types"
import {Skeleton} from "antd"

const ShopDescription: FC<QueryType> = ({data}) => {
    return (
        <div className="py-[40px] mt-5">
            <div className="border-b border-[#46A358] py-[10px]">
                <h3 className=" cursor-pointer font-bold text-[18px] text-[#3d3d3d]">
                    Product Description
                </h3>
            </div>

            <div className="pt-4">
                {data?.description ? (
                    <div
                        className="text-[#3d3d3db9] font-[500] leading-[130%] max-[540px]:font-normal"
                        dangerouslySetInnerHTML={{
                            __html: data?.description as string,
                        }}></div>
                ) : (
                    <div className="text-[#3d3d3db9] font-[500] leading-[130%]">
                        <Skeleton />
                    </div>
                )}
            </div>
        </div>
    )
}

export default ShopDescription
