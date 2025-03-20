import {useState} from "react"

import Discount from "./discount"
import Price from "./price-filter"

// icons
import {PiSlidersHorizontal} from "react-icons/pi"
import CategoryItem from "./category-item"

const Categories = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {/* filter btn */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="justify-between text-white font-medium items-center gap-[10px] w-full p-[10px_20px] rounded-lg bg-[#46a358] hidden max-[750px]:flex">
                <p>Filter</p>
                <PiSlidersHorizontal className="text-[24px]" />
            </button>

            {/* Sidebar (Filter) */}
            <aside
                className={`bg-[#f2f2f2] w-[330px] p-[15px] rounded-md max-[750px]:w-full overflow-hidden transition-all duration-300 ${
                    isOpen
                        ? "max-h-fit p-[15px]"
                        : "max-[750px]:!h-0 max-[750px]:!p-0"
                }`}>
                <div className="p-2 flex flex-col gap-[10px]">
                    <h3 className="text-[#3d3d3d] font-bold">Categories</h3>

                    {/* category items */}
                    <CategoryItem />

                    {/* filter by price */}
                    <Price />

                    {/* discount */}
                    <div className="max-[750px]:hidden">
                        <Discount />
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Categories
