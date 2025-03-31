import {CartType} from "../../../@types"
import Loader from "../../../generic/loader"
import {useQueryHandler} from "../../../hooks/useQuery"
import Card from "../../home-component/plant-list/products/card"

const ProfileProducts = () => {
    const {card_loader} = Loader()
    const {
        data,
        isLoading,
        isError,
    }: {isLoading: boolean; isError: boolean; data?: CartType[]} =
        useQueryHandler({
            pathname: "myProducts",
            url: "user/products",
        })

    return (
        <div>
            <div className="grid grid-cols-3 gap-[25px_15px] max-[1000px]:grid-cols-2 max-[350px]:grid-cols-1 max-[350px]:gap-[15px]">
                {isLoading || isError
                    ? card_loader()
                    : data?.map((item) => <Card key={item._id} {...item} />)}
            </div>
        </div>
    )
}

export default ProfileProducts
