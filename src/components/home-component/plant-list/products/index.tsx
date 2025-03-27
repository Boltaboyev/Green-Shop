import type {CartType} from "../../../../@types"
import {useQueryHandler} from "../../../../hooks/useQuery"
import Loader from "../../../../generic/loader"

import Card from "./card"
import ProductsTitle from "./product-title"
import {useSearchParamsHandler} from "../../../../hooks/useSearchParams"
import {Empty} from "antd"

const Products = () => {
    const {getParam} = useSearchParamsHandler()
    const category = getParam("category") || "house-plants"
    const range_min = getParam("range_min") || 0
    const range_max = getParam("range_max") || 1000
    const sort = getParam("sort") || "default-sorting"
    const type = getParam("type") || "all-plants"

    const {
        data,
        isLoading,
        isError,
    }: {isLoading: boolean; isError: boolean; data?: CartType[]} =
        useQueryHandler({
            pathname: `flowers-category${category}range_min-${range_min}range_max-${range_max}-sort-${sort}-type-${type}`,
            url: `flower/category/${category}`,
            params: {range_min, range_max, sort, type},
        })
    const {card_loader} = Loader()

    if (!data?.length && !isError && !isLoading) {
        return (
            <div className="w-full flex flex-col gap-[15px]">
                <ProductsTitle />

                <Empty />
            </div>
        )
    }

    return (
        <div className="w-full flex flex-col gap-[15px]">
            <ProductsTitle />

            <div className="grid grid-cols-3 gap-[25px_15px] max-[1000px]:grid-cols-2 max-[350px]:grid-cols-1 max-[350px]:gap-[15px]">
                {isLoading || isError
                    ? card_loader()
                    : data?.map((item) => <Card key={item._id} {...item} />)}
            </div>
        </div>
    )
}

export default Products
