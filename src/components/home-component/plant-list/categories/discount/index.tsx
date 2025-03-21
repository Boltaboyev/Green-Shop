import type {DiscountType, QueryType2} from "../../../../../@types"
import Loader from "../../../../../generic/loader"
import {useQueryHandler} from "../../../../../hooks/useQuery"

const Discount = () => {
    const {data, isLoading, isError}: QueryType2<DiscountType> =
        useQueryHandler({
            url: "features/discount",
            pathname: "discount",
        })

    const {discount_loader} = Loader()
    return (
        <div>
            {isLoading || isError ? (
                discount_loader()
            ) : (
                <div className="flex flex-col justify-between items-center gap-[10px] text-center mt-4">
                    <h2 className="text-[#46a358] text-[20px] font-normal leading-[120%]">
                        {data?.title}
                    </h2>

                    <h3 className="text-[#3d3d3d] font-bold text-[20px]">
                        UP TO {data?.discoount_up_to}% OFF
                    </h3>

                    <img
                        src={data?.poster_image_url}
                        alt=""
                        className="max-[750px]:h-[300px] object-contain"
                    />
                </div>
            )}
        </div>
    )
}

export default Discount
