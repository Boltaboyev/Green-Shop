import {useNavigate, useParams} from "react-router-dom"

import {useQueryHandler} from "../../hooks/useQuery"
import {QueryType} from "../../@types"

import ShopSwiper from "./plant-swiper"
import ShopInfo from "./plant-info"
import ShopDescription from "./plant-description"
import {LeftCircleOutlined} from "@ant-design/icons"

interface ParamsType {
    category?: string
    id?: string
}

const PlantInfo = () => {
    const {category, id}: ParamsType = useParams()
    const {data, isError, isLoading}: QueryType = useQueryHandler({
        pathname: "id_card",
        url: `/flower/category/${category}/${id}`,
    })

    const navigate = useNavigate()

    return (
        <section className="py-[30px]">
            <div className="container2">
                <p
                    onClick={() => navigate("/")}
                    className="mb-4 text-[#46a358] font-medium cursor-pointer text-[14px] border-b w-fit">
                    <LeftCircleOutlined /> back to products
                </p>
                <div className="grid grid-cols-2 gap-8 max-[980px]:grid-cols-1">
                    <ShopSwiper
                        data={data}
                        isLoading={isLoading}
                        isError={isError}
                    />
                    <ShopInfo
                        data={data}
                        isLoading={isLoading}
                        isError={isError}
                    />
                </div>

                <ShopDescription
                    data={data}
                    isLoading={isLoading}
                    isError={isError}
                />
            </div>
        </section>
    )
}

export default PlantInfo
