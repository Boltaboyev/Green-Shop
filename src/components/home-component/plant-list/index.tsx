// components
import Categories from "./categories"
import Products from "./products"

const PlantList = () => {
    return (
        <section>
            <div className="container2 flex justify-between items-start gap-[20px] max-[750px]:flex-col py-[20px]">
                <Categories />
                <Products />
            </div>
        </section>
    )
}

export default PlantList
