import OrdersForms from "./oders-forms"
import OrdersProduct from "./orders-product"

const ProductCheckoutComponent = () => {
    return (
        <section className="py-3">
            <div className="container2">
                <div className="grid grid-cols-[2.5fr_2fr] gap-20">
                    <OrdersForms />
                    <OrdersProduct />
                </div>
            </div>
        </section>
    )
}

export default ProductCheckoutComponent
