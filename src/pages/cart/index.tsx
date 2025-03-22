import CardTotal from "./card-total"
import Shopping from "./shopping"

function ProductsShop() {
    return (
        <section className="py-[10px]">
            <div className="container2">
                <div className="grid grid-cols-[3fr_1.5fr] my-9 gap-[20px] max-[1095px]:grid-cols-1">
                    <Shopping />
                    <CardTotal />
                </div>
            </div>
        </section>
    )
}

export default ProductsShop
