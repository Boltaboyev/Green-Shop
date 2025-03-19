import type {CartType} from "../../../../@types"
import {useQueryHandler} from "../../../../hooks/useQuery"
import Card from "./card"

const Products = () => {
    const {data}: {isLoading: boolean; isError: boolean; data?: CartType[]} =
        useQueryHandler({
            pathname: `flowers`,
            url: `/flower/category/house-plants`,
        })

    return (
        <div className="w-full">
            <div className="grid grid-cols-3 gap-[25px_15px] max-[1000px]:grid-cols-2 max-[350px]:grid-cols-1 max-[350px]:gap-[15px]">
                {data?.map((value) => (
                    <Card key={value._id} {...value} />
                ))}
            </div>
        </div>
    )
}

export default Products
