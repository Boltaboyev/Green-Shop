import {useReduxSelector} from "../../../hooks/useRedux"
import PricesTotal from "../../../pages/cart/card-total/prices"
import CheckData from "./card"

const OrdersProduct = () => {
    const {shop} = useReduxSelector((state) => state.shopSlice)
    return (
        <div>
            {shop.map((value) => (
                <CheckData key={value._id} {...value} />
            ))}
            <PricesTotal />
        </div>
    )
}

export default OrdersProduct
